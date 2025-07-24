"use client"

import * as React from "react"
import { usePathname } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { useTranslations } from "next-intl"

const LANGUAGES = [
    { code: "en", label: "English", flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" },
    { code: "my", label: "Burmese", flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/MM.svg" },
    { code: "jp", label: "Japanese", flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg" },
    { code: "kr", label: "Korean", flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/KR.svg" },
    { code: "th", label: "Thai", flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/TH.svg" },
]

export function LanguageChange({ currentLocale }: { currentLocale: string }) {
    const pathname = usePathname()
    const t = useTranslations("Core");

    const handleChange = (locale: string) => {
        if (locale !== currentLocale) {
            window.location.href = `/${locale}${pathname.replace(/^\/(en|my|jp|kr|th)/, "")}`
        }
    }

    const currentLang = LANGUAGES.find(l => l.code === currentLocale)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-lg">
                    {currentLang && (
                        <Image
                            src={currentLang.flag}
                            alt={currentLang.label}
                            className="inline-block w-5 h-5 rounded-full mr-2 align-middle border border-gray-200/50"
                            style={{ objectFit: "cover" }}
                            width={20}
                            height={20}
                        />
                    )}
                    <span className="capitalize">{t(currentLocale)}</span>
                    <span className="sr-only">{t("language")}</span>
                </Button>

            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuLabel className="font-medium">{t("language")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {LANGUAGES.map(lang => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => handleChange(lang.code)}
                        disabled={lang.code === currentLocale}
                    >
                        <Image
                            src={lang.flag}
                            alt={lang.label}
                            className="inline-block w-5 h-5 rounded-full mr-2 align-middle border border-gray-200/50"
                            style={{ objectFit: "cover" }}
                            width={20}
                            height={20}
                        />
                        <span className="capitalize">{t(lang.code)}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}