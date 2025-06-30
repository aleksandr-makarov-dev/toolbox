import { Button } from "@/components/ui/button";
import {
  EmptyState,
  EmptyStateActions,
  EmptyStateSubtitle,
  EmptyStateTitle,
} from "@/components/ui/empty-state";
import { PlusIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

export function BoardsEmptyState() {
  const { t } = useTranslation("BoardsEmptyState");

  return (
    <EmptyState>
      <EmptyStateTitle>{t("EmptyStateTitle")}</EmptyStateTitle>
      <EmptyStateSubtitle>{t("EmptyStateSubtitle")}</EmptyStateSubtitle>
      <EmptyStateActions>
        <Button asChild>
          <NavLink to="/dashboard/projects/create">
            <PlusIcon className="mr-2" /> {t("EmptyStateActions_primary_btn")}
          </NavLink>
        </Button>
        <Button asChild variant="outline">
          <NavLink to="/dashboard/projects">
            {t("EmptyStateActions_secondary_btn")}
          </NavLink>
        </Button>
      </EmptyStateActions>
    </EmptyState>
  );
}
