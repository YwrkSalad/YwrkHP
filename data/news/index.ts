import type { ComponentType } from "react";
import type { NewsItemMeta } from "./_types";
import { meta as metaOpenCampus, default as BodyOpenCampus } from "./20260504-open-campus";
import { meta as metaEntrance, default as BodyEntrance } from "./20260408-entrance-ceremony";
import { meta as metaRecruitment, default as BodyRecruitment } from "./20260325-recruitment-2027";
import { meta as metaForum, default as BodyForum } from "./20260310-forum-2026";
import { meta as metaLibrary, default as BodyLibrary } from "./20260228-library-extended-hours";
import { meta as metaRenewal, default as BodyRenewal } from "./20260214-website-renewal";

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
