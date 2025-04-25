import '../chunks/page-ssr_BQ1a2y7C.mjs';
import { c as createComponent, a as createAstro, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, g as renderSlot, e as renderTemplate, d as renderComponent } from '../chunks/astro/server_CcDhGMR9.mjs';
import { $ as $$Layout } from '../chunks/Layout_D8aO8Iaq.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/node_modules/.pnpm/lucide-astro@0.479.0_astro@5.4.2_@types+node@22.14.1_jiti@2.4.2_lightningcss@1.29.2_rollup@4._5bbbriclsw3yc3ex7d5ecojdnu/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$ArrowRight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ArrowRight;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "arrow-right", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M5 12h14"></path> <path d="m12 5 7 7-7 7"></path> ` })}`;
}, "/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/node_modules/.pnpm/lucide-astro@0.479.0_astro@5.4.2_@types+node@22.14.1_jiti@2.4.2_lightningcss@1.29.2_rollup@4._5bbbriclsw3yc3ex7d5ecojdnu/node_modules/lucide-astro/dist/ArrowRight.astro", void 0);

const $$Astro$2 = createAstro();
const $$Book = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Book;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "book", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path> ` })}`;
}, "/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/node_modules/.pnpm/lucide-astro@0.479.0_astro@5.4.2_@types+node@22.14.1_jiti@2.4.2_lightningcss@1.29.2_rollup@4._5bbbriclsw3yc3ex7d5ecojdnu/node_modules/lucide-astro/dist/Book.astro", void 0);

const $$Astro$1 = createAstro();
const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "code", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<polyline points="16 18 22 12 16 6"></polyline> <polyline points="8 6 2 12 8 18"></polyline> ` })}`;
}, "/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/node_modules/.pnpm/lucide-astro@0.479.0_astro@5.4.2_@types+node@22.14.1_jiti@2.4.2_lightningcss@1.29.2_rollup@4._5bbbriclsw3yc3ex7d5ecojdnu/node_modules/lucide-astro/dist/Code.astro", void 0);

const $$Astro = createAstro();
const $$Star = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Star;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "star", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path> ` })}`;
}, "/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/node_modules/.pnpm/lucide-astro@0.479.0_astro@5.4.2_@types+node@22.14.1_jiti@2.4.2_lightningcss@1.29.2_rollup@4._5bbbriclsw3yc3ex7d5ecojdnu/node_modules/lucide-astro/dist/Star.astro", void 0);

const $$DotGrid = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"> ${[...Array(8)].map((_) => renderTemplate`<div class="flex justify-center"> ${[...Array(6)].map((_2) => renderTemplate`<div class="w-2 h-2 bg-white rounded-full opacity-20 m-4"></div>`)} </div>`)} </section>`;
}, "/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/src/components/DotGrid.astro", void 0);

const $$CodeSnippet = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-2xl max-w-2xl mx-auto mt-16 border border-gray-700">  <div class="flex items-center bg-gray-800 px-4 py-2 border-b border-gray-700"> <div class="flex space-x-2"> <div class="w-2.5 h-2.5 bg-red-500 rounded-full"></div> <div class="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div> <div class="w-2.5 h-2.5 bg-green-500 rounded-full"></div> </div> <div class="text-gray-400 text-xs ml-3 font-mono">example.js</div> <div class="ml-auto flex space-x-2"> <div class="text-xs text-gray-500 bg-gray-700 px-2 py-0.5 rounded">JavaScript</div> </div> </div>  <div class="flex">  <div class="hidden sm:flex flex-col py-2 px-2 text-gray-600 font-mono text-xs text-right select-none bg-gray-900 border-r border-gray-700"> <div class="leading-5">1</div> <div class="leading-5">2</div> <div class="leading-5">3</div> <div class="leading-5">4</div> <div class="leading-5">5</div> <div class="leading-5">6</div> <div class="leading-5">7</div> <div class="leading-5">8</div> <div class="leading-5">9</div> </div>  <pre class="py-2 px-4 text-xs font-mono flex-1 overflow-x-auto">        <code class="block leading-5">
    <span class="text-purple-400">function</span> <span class="text-blue-400">learnCoding</span><span class="text-gray-400">()</span> <span class="text-gray-400">${`{`}</span>
        <span class="text-purple-400">const</span> <span class="text-blue-300">skills</span> <span class="text-gray-400">=</span> <span class="text-gray-400">[</span><span class="text-green-300">'JavaScript'</span><span class="text-gray-400">,</span> <span class="text-green-300">'React'</span><span class="text-gray-400">,</span> <span class="text-green-300">'Node.js'</span><span class="text-gray-400">];</span>
        <span class="text-purple-400">const</span> <span class="text-blue-300">you</span> <span class="text-gray-400">=</span> <span class="text-purple-400">new</span> <span class="text-yellow-300">Developer</span><span class="text-gray-400">();</span>
        
        <span class="text-blue-300">skills</span><span class="text-gray-400">.</span><span class="text-yellow-300">forEach</span><span class="text-gray-400">(</span><span class="text-orange-300">skill</span> <span class="text-purple-400">=></span> <span class="text-gray-400">${`{`}</span>
        <span class="text-blue-300">you</span><span class="text-gray-400">.</span><span class="text-yellow-300">learn</span><span class="text-gray-400">(</span><span class="text-orange-300">skill</span><span class="text-gray-400">);</span>
        <span class="text-gray-400">${`});`}</span>
        
        <span class="text-purple-400">return</span> <span class="text-green-300">"You're now a pro developer!"</span><span class="text-gray-400">;</span>
    <span class="text-gray-400">${`}`}</span>
    <span class="text-blue-400">learnCoding</span><span class="text-gray-400">();</span>
            </code>
        </pre> </div>  <div class="flex items-center justify-between bg-gray-800 px-4 py-1 border-t border-gray-700 text-xs text-gray-500"> <div>9 lines</div> <div>UTF-8</div> </div> </section>`;
}, "/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/src/components/CodeSnippet.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CodeWay Academy", "description": "Level up your coding skills with top-rated courses from industry experts." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div class="absolute top-[80%] left-[10%] hidden md:block"> ${renderComponent($$result2, "DotGrid", $$DotGrid, {})} </div> <div class="absolute top-[100%] -right-16 hidden md:block"> ${renderComponent($$result2, "DotGrid", $$DotGrid, {})} </div> <main class="container mx-auto px-4 py-20"> <section class="text-center"> <h1 class="text-6xl font-extrabold text-white mb-6">Level up your coding skills</h1> <p class="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
Access top-rated courses from industry experts and become a world-class developer. 
			Learn the latest technologies and advance your career.
</p> <a href="/courses"> <button class="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full hover:bg-teal-100 transition duration-300 flex items-center mx-auto">
Start Learning
${renderComponent($$result2, "ArrowRight", $$ArrowRight, { "class": "ml-2", "size": 20 })} </button> </a> </section> ${renderComponent($$result2, "CodeSnippet", $$CodeSnippet, {})} <section class="mt-32 grid md:grid-cols-3 gap-12"> ${[
    { icon: $$Code, title: "Cutting-Edge Tech", description: "Learn the latest programming languages, frameworks, and tools." },
    { icon: $$Book, title: "Comprehensive Curriculum", description: "From basics to advanced topics, find courses for every skill level." },
    { icon: $$Star, title: "Expert Instructors", description: "Learn from industry professionals and experienced developers." }
  ].map((feature, index) => renderTemplate`<div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 text-white"> ${renderComponent($$result2, "feature.icon", feature.icon, { "size": 40, "class": "text-teal-300 mb-4" })} <h3 class="text-xl font-semibold mb-2">${feature.title}</h3> <p class="text-teal-100">${feature.description}</p> </div>`)} </section> <section class="mt-32 text-center"> <h2 class="text-4xl font-bold text-white mb-6">Ready to Become a Pro Developer?</h2> <p class="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
Join thousands of developers who have transformed their careers with our curated collection of top-rated courses.
</p> <button class="bg-teal-400 text-purple-900 font-semibold py-3 px-8 rounded-full hover:bg-teal-300 transition duration-300">
Explore Courses
</button> </section> </main> </main> ` })}`;
}, "/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/src/pages/index.astro", void 0);

const $$file = "/Users/patrickniyo/Documents/workspaces/ME/codeway-v0/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
