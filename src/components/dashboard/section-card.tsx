import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"
import { useLocale, useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { formatNumber } from "@/lib/utils";

export function SectionCards() {
  const t = useTranslations("HomePage");
  const currentLocale = useLocale();
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>{t("total_revenue")}</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            ${formatNumber("1250.00", currentLocale)}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +{formatNumber("12.5", currentLocale)}%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {t("revenue_subtitle_1")} <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            {t("revenue_subtitle_2")}
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>{t("new_customers")}</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {formatNumber("1234", currentLocale)}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              -{formatNumber("20", currentLocale)}%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {t("new_customers_subtitle_1")} <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            {t("new_customers_subtitle_2")}
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>{t("active_accounts")}</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {formatNumber("45678", currentLocale)}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +{formatNumber("12.5", currentLocale)}%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {t("active_accounts_subtitle_1")} <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            {t("active_accounts_subtitle_2")}
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>{t("growth_rate")}</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {formatNumber("4.5", currentLocale)}%
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +{formatNumber("4.5", currentLocale)}%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {t("growth_rate_subtitle_1")} <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            {t("growth_rate_subtitle_2")}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
