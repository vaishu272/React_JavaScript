import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl space-y-8 p-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Modern UI Dashboard Demo
        </h1>
        <p className="text-muted-foreground">
          This project demonstrates how shadcn, Radix UI, and Ant Design can
          work together in a real-world React application.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-5 space-y-2">
          <h2 className="font-semibold">shadcn/ui</h2>
          <p className="text-sm text-muted-foreground">
            Used as the base design system. Provides styled components like
            cards, buttons, inputs, and layout utilities.
          </p>
        </Card>

        <Card className="p-5 space-y-2">
          <h2 className="font-semibold">Radix UI</h2>
          <p className="text-sm text-muted-foreground">
            Handles accessibility and interaction logic such as dropdowns, focus
            control, and keyboard navigation.
          </p>
        </Card>

        <Card className="p-5 space-y-2">
          <h2 className="font-semibold">Ant Design</h2>
          <p className="text-sm text-muted-foreground">
            Used selectively for complex components like tables and advanced
            forms to speed up enterprise UI development.
          </p>
        </Card>
      </div>

      <Card className="p-6 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Explore the Dashboard</h3>
          <p className="text-sm text-muted-foreground">
            Navigate to see reports, forms, and UI examples.
          </p>
        </div>

        <Link to="/dashboard">
          <Button>Open Dashboard</Button>
        </Link>
      </Card>
    </div>
  );
}
