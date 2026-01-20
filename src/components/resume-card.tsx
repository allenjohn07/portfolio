"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  altText: string;
  title: string;
  url?: string;
  subtitle?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  title,
  url,
  subtitle,
  badges,
  period,
}: ResumeCardProps) => {
  return (
    <Card className="flex">
      <div className="flex-grow text-muted-foreground items-center flex-col group">
        <CardHeader>
          <div className="flex items-center justify-between gap-x-2 text-base">
            <Link href={url ?? ""} target="_blank" rel="noopener noreferrer">
              <h3 className="inline-flex items-center justify-center hover:text-blue-400 cursor-pointer font-semibold leading-5 text-md">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
              </h3>
            </Link>
            <div className="text-nowrap md:max-w-full text-sm tabular-nums text-muted-foreground">
              {period}
            </div>
          </div>
          {subtitle && (
            <div className="font-sans text-sm leading-4">{subtitle}</div>
          )}
        </CardHeader>
      </div>
    </Card>
  );
};
