import type { ComponentType } from "react";
import type { NewsItemMeta } from "./_types";
import { meta as metaOpenCampus, default as BodyOpenCampus } from "./open-campus-2026-06-18";
import { meta as metaEntrance, default as BodyEntrance } from "./2026-entrance-ceremony";
import { meta as metaRecruitment, default as BodyRecruitment } from "./2027-recruitment";
import { meta as metaForum, default as BodyForum } from "./forum-2026";
import { meta as metaLibrary, default as BodyLibrary } from "./library-extended-hours";
import { meta as metaRenewal, default as BodyRenewal } from "./website-renewal";

export type { NewsItemMeta };

export type NewsItem = NewsItemMeta & {
  Body: ComponentType;
};

export const news: NewsItem[] = [
  { ...metaOpenCampus, Body: BodyOpenCampus },
  { ...metaEntrance, Body: BodyEntrance },
  { ...metaRecruitment, Body: BodyRecruitment },
  { ...metaForum, Body: BodyForum },
  { ...metaLibrary, Body: BodyLibrary },
  { ...metaRenewal, Body: BodyRenewal },
];
