/**
 * Minimal IndexedDB key/value wrapper.
 * No external dependency. All app-local persistence goes through here.
 */

const DB_NAME = "momentum-deck";
const DB_VERSION = 1;
const STORE_KV = "kv";

export const KEY_DECK = "deck";
export const KEY_SETTINGS = "settings";

function isAvailable(): boolean {
  return typeof window !== "undefined" && typeof window.indexedDB !== "undefined";
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_KV)) {
        db.createObjectStore(STORE_KV);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error("Could not open local storage"));
  });
}

export async function idbGet<T>(key: string): Promise<T | undefined> {
  if (!isAvailable()) return undefined;
  const db = await openDb();
  try {
    return await new Promise<T | undefined>((resolve, reject) => {
      const tx = db.transaction(STORE_KV, "readonly");
      const req = tx.objectStore(STORE_KV).get(key);
      req.onsuccess = () => resolve(req.result as T | undefined);
      req.onerror = () => reject(req.error ?? new Error("Could not read local data"));
    });
  } finally {
    db.close();
  }
}

export async function idbSet<T>(key: string, value: T): Promise<void> {
  if (!isAvailable()) return;
  const db = await openDb();
  try {
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_KV, "readwrite");
      tx.objectStore(STORE_KV).put(value, key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error ?? new Error("Could not save local data"));
    });
  } finally {
    db.close();
  }
}

export async function idbDelete(key: string): Promise<void> {
  if (!isAvailable()) return;
  const db = await openDb();
  try {
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_KV, "readwrite");
      tx.objectStore(STORE_KV).delete(key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error ?? new Error("Could not remove local data"));
    });
  } finally {
    db.close();
  }
}

export async function idbClear(): Promise<void> {
  if (!isAvailable()) return;
  const db = await openDb();
  try {
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_KV, "readwrite");
      tx.objectStore(STORE_KV).clear();
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error ?? new Error("Could not clear local data"));
    });
  } finally {
    db.close();
  }
}
