import Layout from "@/components/layouts/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function DashboardHomePage() {
  return (
    <Layout title="Home">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Input placeholder="Search..." />
          <Button>Press me!</Button>
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Search..." aria-invalid />
          <Button variant="destructive">Press me!</Button>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="compact" id="r3" aria-invalid />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      </div>
    </Layout>
  );
}
