const runtimeConfig = typeof window !== "undefined" ? window.__CONTENT_ENGINE_UI_CONFIG__ || {} : {};

function stripTrailingSlash(value) {
  return String(value || "").replace(/\/+$/, "");
}

function browserOrigin() {
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return "http://localhost:8080";
}

function normalizeBaseUrl(value, fallback) {
  const normalized = String(value || "").trim();
  if (!normalized) {
    return stripTrailingSlash(fallback);
  }
  try {
    return stripTrailingSlash(new URL(normalized, fallback).toString());
  } catch (_error) {
    return stripTrailingSlash(fallback);
  }
}

function isNonHttpSpecialUrl(value) {
  return value.startsWith("data:") || value.startsWith("blob:");
}

function resolveUrl(value, baseUrl) {
  const normalized = String(value || "").trim();
  if (!normalized) {
    return "";
  }
  if (isNonHttpSpecialUrl(normalized)) {
    return normalized;
  }
  try {
    return new URL(normalized).toString();
  } catch (_error) {
    return new URL(normalized, `${stripTrailingSlash(baseUrl)}/`).toString();
  }
}

export const API_BASE_URL = normalizeBaseUrl(runtimeConfig.apiBaseUrl, browserOrigin());
export const ASSET_BASE_URL = normalizeBaseUrl(runtimeConfig.assetBaseUrl || runtimeConfig.apiBaseUrl, API_BASE_URL);

export function resolveApiUrl(value) {
  return resolveUrl(value, API_BASE_URL);
}

export function resolveAssetUrl(value) {
  return resolveUrl(value, ASSET_BASE_URL);
}
