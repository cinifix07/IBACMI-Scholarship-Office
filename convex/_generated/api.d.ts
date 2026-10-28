/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as activityLogs from "../activityLogs.js";
import type * as adminAuth from "../adminAuth.js";
import type * as allinfo from "../allinfo.js";
import type * as applicantPortal from "../applicantPortal.js";
import type * as applicants from "../applicants.js";
import type * as archive from "../archive.js";
import type * as archiveHelpers from "../archiveHelpers.js";
import type * as batchExport from "../batchExport.js";
import type * as batchExportRules from "../batchExportRules.js";
import type * as billing from "../billing.js";
import type * as billingRules from "../billingRules.js";
import type * as connectionHealth from "../connectionHealth.js";
import type * as documentation from "../documentation.js";
import type * as documentationHttp from "../documentationHttp.js";
import type * as documentationRules from "../documentationRules.js";
import type * as form2 from "../form2.js";
import type * as http from "../http.js";
import type * as noIdList from "../noIdList.js";
import type * as noIdRules from "../noIdRules.js";
import type * as quickActions from "../quickActions.js";
import type * as studentProfile from "../studentProfile.js";
import type * as studentProfileAuth from "../studentProfileAuth.js";
import type * as studentProfileRules from "../studentProfileRules.js";
import type * as support from "../support.js";
import type * as validation from "../validation.js";
import type * as validationActions from "../validationActions.js";
import type * as validationParser from "../validationParser.js";
import type * as validationRules from "../validationRules.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  activityLogs: typeof activityLogs;
  adminAuth: typeof adminAuth;
  allinfo: typeof allinfo;
  applicantPortal: typeof applicantPortal;
  applicants: typeof applicants;
  archive: typeof archive;
  archiveHelpers: typeof archiveHelpers;
  batchExport: typeof batchExport;
  batchExportRules: typeof batchExportRules;
  billing: typeof billing;
  billingRules: typeof billingRules;
  connectionHealth: typeof connectionHealth;
  documentation: typeof documentation;
  documentationHttp: typeof documentationHttp;
  documentationRules: typeof documentationRules;
  form2: typeof form2;
  http: typeof http;
  noIdList: typeof noIdList;
  noIdRules: typeof noIdRules;
  quickActions: typeof quickActions;
  studentProfile: typeof studentProfile;
  studentProfileAuth: typeof studentProfileAuth;
  studentProfileRules: typeof studentProfileRules;
  support: typeof support;
  validation: typeof validation;
  validationActions: typeof validationActions;
  validationParser: typeof validationParser;
  validationRules: typeof validationRules;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
