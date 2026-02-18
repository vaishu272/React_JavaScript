import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-muted-foreground">Manage dashboard preferences</p>
      </div>

      <Card className="p-6 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Company Name</label>
          <Input placeholder="Enter company name" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Support Email</label>
          <Input placeholder="Enter support email" />
        </div>

        <Button>Save Settings</Button>
      </Card>
    </div>
  );
}
