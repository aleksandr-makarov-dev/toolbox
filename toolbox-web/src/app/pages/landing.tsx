import Layout from "@/components/layouts/layout";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
export function LandingPage() {
  return (
    <Layout title="Landing">
      <div className="flex flex-col gap-2 items-start">
        <Button>Click me!</Button>
        <Input placeholder="Search..." />
        <Checkbox />
        <RadioGroup>
          <RadioGroupItem value="1" />
        </RadioGroup>
      </div>
    </Layout>
  );
}
