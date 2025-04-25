import { h as decodeKey } from './chunks/astro/server_CcDhGMR9.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BcvoJ12T.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/patrickniyo/Documents/workspaces/ME/codeway-v0/","cacheDir":"file:///Users/patrickniyo/Documents/workspaces/ME/codeway-v0/node_modules/.astro/","outDir":"file:///Users/patrickniyo/Documents/workspaces/ME/codeway-v0/dist/","srcDir":"file:///Users/patrickniyo/Documents/workspaces/ME/codeway-v0/src/","publicDir":"file:///Users/patrickniyo/Documents/workspaces/ME/codeway-v0/public/","buildClientDir":"file:///Users/patrickniyo/Documents/workspaces/ME/codeway-v0/dist/client/","buildServerDir":"file:///Users/patrickniyo/Documents/workspaces/ME/codeway-v0/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"courses/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/courses","isIndex":true,"type":"page","pattern":"^\\/courses\\/?$","segments":[[{"content":"courses","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/courses/index.astro","pathname":"/courses","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.4.2_@types+node@22.14.1_jiti@2.4.2_lightningcss@1.29.2_rollup@4.35.0_typescript@5.8.2_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.DTiPvlP-.css"},{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/admin/[...params]","pattern":"^\\/admin(?:\\/(.*?))?\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/.pnpm/@sanity+astro@3.2.6_@emotion+is-prop-valid@1.2.2_@sanity+client@6.29.0_@sanity+types@3.85.1_@_edakcaicwzesidfoesn63mrh2e/node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.DTiPvlP-.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/node_modules/.pnpm/@sanity+astro@3.2.6_@emotion+is-prop-valid@1.2.2_@sanity+client@6.29.0_@sanity+types@3.85.1_@_edakcaicwzesidfoesn63mrh2e/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/src/pages/courses/index.astro",{"propagation":"none","containsHead":true}],["/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/.pnpm/@sanity+astro@3.2.6_@emotion+is-prop-valid@1.2.2_@sanity+client@6.29.0_@sanity+types@3.85.1_@_edakcaicwzesidfoesn63mrh2e/node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/admin/_---params_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/courses/index@_@astro":"pages/courses.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.4.2_@types+node@22.14.1_jiti@2.4.2_lightningcss@1.29.2_rollup@4.35.0_typescript@5.8.2_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/node_modules/.pnpm/astro@5.4.2_@types+node@22.14.1_jiti@2.4.2_lightningcss@1.29.2_rollup@4.35.0_typescript@5.8.2_yaml@2.7.0/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BFeLKZc7.mjs","\u0000@astrojs-manifest":"manifest_PFxqrp6R.mjs","@astrojs/react/client.js":"_astro/client.DuhCkcSo.js","/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/node_modules/.pnpm/astro@5.4.2_@types+node@22.14.1_jiti@2.4.2_lightningcss@1.29.2_rollup@4.35.0_typescript@5.8.2_yaml@2.7.0/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.DksKCMWR.js","/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/src/components/Nav.astro?astro&type=script&index=0&lang.ts":"_astro/Nav.astro_astro_type_script_index_0_lang.sp93NRNJ.js","/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/node_modules/.pnpm/sanity@3.85.1_@emotion+is-prop-valid@1.2.2_@types+node@22.14.1_@types+react@19.1.2_immer@10.1_axqp2bwzn4meahldkhtu77rzee/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.DMKxiyHz.js","/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/node_modules/.pnpm/sanity@3.85.1_@emotion+is-prop-valid@1.2.2_@types+node@22.14.1_@types+react@19.1.2_immer@10.1_axqp2bwzn4meahldkhtu77rzee/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.4xhaPEtk.js","/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/node_modules/.pnpm/sanity@3.85.1_@emotion+is-prop-valid@1.2.2_@types+node@22.14.1_@types+react@19.1.2_immer@10.1_axqp2bwzn4meahldkhtu77rzee/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.Chz_oN3-.js","/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/node_modules/.pnpm/sanity@3.85.1_@emotion+is-prop-valid@1.2.2_@types+node@22.14.1_@types+react@19.1.2_immer@10.1_axqp2bwzn4meahldkhtu77rzee/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.BZp2G0ql.js","/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/node_modules/.pnpm/sanity@3.85.1_@emotion+is-prop-valid@1.2.2_@types+node@22.14.1_@types+react@19.1.2_immer@10.1_axqp2bwzn4meahldkhtu77rzee/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.CpU8eAyf.js","/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/node_modules/.pnpm/@sanity+client@6.29.0_debug@4.4.0/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.sEuv_6A2.js","/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/node_modules/.pnpm/@sanity+ui@2.15.13_@emotion+is-prop-valid@1.2.2_react-dom@19.1.0_react@19.1.0__react-is@18.3._ermcwwxwplvxbeoy6spsceskuq/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.BU2xqG1H.js","/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/node_modules/.pnpm/sanity@3.85.1_@emotion+is-prop-valid@1.2.2_@types+node@22.14.1_@types+react@19.1.2_immer@10.1_axqp2bwzn4meahldkhtu77rzee/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.Bey82YOd.js","/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/node_modules/.pnpm/sanity@3.85.1_@emotion+is-prop-valid@1.2.2_@types+node@22.14.1_@types+react@19.1.2_immer@10.1_axqp2bwzn4meahldkhtu77rzee/node_modules/sanity/lib/_chunks-es/resources5.mjs":"_astro/resources5.B1tvUhs5.js","/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/node_modules/.pnpm/sanity@3.85.1_@emotion+is-prop-valid@1.2.2_@types+node@22.14.1_@types+react@19.1.2_immer@10.1_axqp2bwzn4meahldkhtu77rzee/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.CACh7sOb.js","/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/node_modules/.pnpm/sanity@3.85.1_@emotion+is-prop-valid@1.2.2_@types+node@22.14.1_@types+react@19.1.2_immer@10.1_axqp2bwzn4meahldkhtu77rzee/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.C4gbNC_t.js","/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/node_modules/.pnpm/@sanity+astro@3.2.6_@emotion+is-prop-valid@1.2.2_@sanity+client@6.29.0_@sanity+types@3.85.1_@_edakcaicwzesidfoesn63mrh2e/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.DqlOWcqx.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/src/components/Nav.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const n=document.getElementById(\"menu-toggle\"),t=document.getElementById(\"close-menu\"),e=document.getElementById(\"mobile-menu\");n?.addEventListener(\"click\",()=>{e?.classList.remove(\"hidden\")}),t?.addEventListener(\"click\",()=>{e?.classList.add(\"hidden\")})});"]],"assets":["/_astro/studio-route.DTiPvlP-.css","/favicon.svg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.DksKCMWR.js","/_astro/ViteDevServerStopped.CpU8eAyf.js","/_astro/browser.DXx054sw.js","/_astro/client.32G2rpbp.js","/_astro/client.DuhCkcSo.js","/_astro/index.CACh7sOb.js","/_astro/index2.C4gbNC_t.js","/_astro/index3.Bey82YOd.js","/_astro/refractor.BU2xqG1H.js","/_astro/resources.4xhaPEtk.js","/_astro/resources2.DMKxiyHz.js","/_astro/resources3.BZp2G0ql.js","/_astro/resources4.Chz_oN3-.js","/_astro/resources5.B1tvUhs5.js","/_astro/stegaEncodeSourceMap.sEuv_6A2.js","/_astro/studio-component.-Xm003DW.js","/_astro/studio-component.DqlOWcqx.js","/assets/logo-1.svg","/courses/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"S1NkWFU2ci4hXx4BfzqPx5jCj8LptT3Pz4YGISXb1SA="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
