import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProjectCardPlaceholder() {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-16" />
      </CardHeader>
      <CardContent>
        <Skeleton className="w-full h-6" />
      </CardContent>
      <CardFooter>
        <Skeleton className="w-32 h-6" />
      </CardFooter>
    </Card>
  );
}
