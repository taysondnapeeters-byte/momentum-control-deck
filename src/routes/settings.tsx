import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AlertTriangle, Eye, EyeOff, Moon, Sun, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Panel, PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useAppState } from "@/state/AppStateProvider";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Momentum Deck" },
      {
        name: "description",
        content: "Appearance, Gemini API key and local data controls for Momentum Deck.",
      },
      { property: "og:title", content: "Settings — Momentum Deck" },
      {
        property: "og:description",
        content: "Appearance, Gemini API key and local data controls for Momentum Deck.",
      },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  const { settings, setTheme, setGeminiApiKey, clearAllData } = useAppState();
  const [draftKey, setDraftKey] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setDraftKey(settings.geminiApiKey ?? "");
  }, [settings.geminiApiKey]);

  return (
    <PageShell title="Settings" subtitle="Appearance, credentials and local data.">
      <Panel>
        <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Appearance
        </h2>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <Button
            variant={settings.theme === "dark" ? "default" : "secondary"}
            className="h-12 rounded-xl"
            onClick={() => setTheme("dark")}
          >
            <Moon className="mr-2 h-5 w-5" /> Dark
          </Button>
          <Button
            variant={settings.theme === "light" ? "default" : "secondary"}
            className="h-12 rounded-xl"
            onClick={() => setTheme("light")}
          >
            <Sun className="mr-2 h-5 w-5" /> Light
          </Button>
        </div>
      </Panel>

      <Panel className="mt-4">
        <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Gemini AI
        </h2>

        <div className="mt-3 flex gap-2 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-xs leading-relaxed text-foreground">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
          <p>
            An API key is a sensitive credential. It is stored only on this device, only if you
            save it, and can be removed at any time. Never share it.
          </p>
        </div>

        <div className="mt-4 space-y-2">
          <Label htmlFor="gemini-key">Gemini API Key</Label>
          <div className="flex gap-2">
            <Input
              id="gemini-key"
              type={visible ? "text" : "password"}
              autoComplete="off"
              placeholder="Paste your key"
              value={draftKey}
              onChange={(e) => setDraftKey(e.target.value)}
              className="h-12 rounded-xl font-mono"
            />
            <Button
              type="button"
              variant="secondary"
              className="h-12 w-12 shrink-0 rounded-xl"
              aria-label={visible ? "Hide key" : "Show key"}
              onClick={() => setVisible((v) => !v)}
            >
              {visible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        <div className="mt-3 grid gap-2">
          <Button
            className="h-12 rounded-xl"
            disabled={!draftKey.trim()}
            onClick={async () => {
              await setGeminiApiKey(draftKey.trim());
              toast.success("API key saved on this device.");
            }}
          >
            Save API Key
          </Button>
          <Button
            variant="secondary"
            className="h-12 rounded-xl"
            disabled={!settings.geminiApiKey}
            onClick={async () => {
              await setGeminiApiKey(null);
              setDraftKey("");
              toast("API key removed from this device.");
            }}
          >
            Remove API Key
          </Button>
          <Button
            variant="ghost"
            className="h-12 rounded-xl"
            onClick={() =>
              toast("Gemini requests will be enabled in a later development phase.")
            }
          >
            Test Connection
          </Button>
        </div>
      </Panel>

      <Panel className="mt-4">
        <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Data
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Removes your deck layout, settings and saved key from this device.
        </p>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" className="mt-3 h-12 w-full rounded-xl">
              <Trash2 className="mr-2 h-5 w-5" /> Clear local app data
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="rounded-2xl">
            <AlertDialogHeader>
              <AlertDialogTitle>Clear all local data?</AlertDialogTitle>
              <AlertDialogDescription>
                Your deck layout, settings and saved API key will be deleted from this device.
                This cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={async () => {
                  await clearAllData();
                  setDraftKey("");
                  toast.success("Local app data cleared.");
                }}
              >
                Clear data
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Panel>
    </PageShell>
  );
}
