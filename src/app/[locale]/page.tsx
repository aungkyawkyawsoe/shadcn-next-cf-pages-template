import { use } from 'react';
import { useTranslations } from "next-intl";
import { ModeToggle } from "@/components/core/theme-toggle";
import { LanguageChange } from "@/components/core/language-change";
import { setRequestLocale } from "next-intl/server";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string }>
}

export default function Home({ params }: Props) {

  const { locale } = use(params);
  // Enable Static Rendering
  setRequestLocale(locale);
  const t = useTranslations("HomePage");

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <p className="text-2xl">{t("about")}</p>
      <div className="flex items-center gap-2 mt-6">
        <LanguageChange currentLocale={locale} />
        <ModeToggle />
        {/* Go to Dashboard */}
        <Button variant="outline">
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
