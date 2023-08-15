"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[195],{5099:(e,s,n)=>{n.r(s),n.d(s,{default:()=>u});var i=n(3699),r=n(9962),t=n(9319),l=n(8207),c=n(1764),o=n(6010);function a(e){const s=e.split("\n"),n=s.filter((e=>""!==e.trim())).reduce(((e,s)=>Math.min(e,s.search(/\S/))),1/0);return s.map((e=>e.slice(n))).join("\n").trim()}const d={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",rowReverse:"rowReverse_hR3U",indexCtas:"indexCtas_Pg_g",indexCtasGitHubButtonWrapper:"indexCtasGitHubButtonWrapper_psdh",heroContainer:"heroContainer_i2aB",imgDemo:"imgDemo_MQZJ",heroSubtitle:"heroSubtitle_jFu1",heroText:"heroText_ryRM"};var h=n(5893);function x(){return(0,h.jsx)("header",{className:(0,o.Z)("hero_syme",d.heroBanner),children:(0,h.jsx)(l.Z,{as:"h1",children:(0,h.jsxs)("div",{class:d.heroContainer,children:[(0,h.jsx)("div",{children:(0,h.jsx)("img",{src:"/img/logo-filled.min.svg",width:200,height:200})}),(0,h.jsxs)("div",{class:(0,o.Z)(d.heroText),children:[(0,h.jsx)("h1",{className:"hero__title",children:"Obsidian Typing"}),(0,h.jsx)("p",{className:(0,o.Z)("hero__subtitle",d.heroSubtitle),children:"The most comprehensive tool to customize groups of notes in Obsidian"}),(0,h.jsxs)("div",{class:d.indexCtas,children:[(0,h.jsx)(i.Z,{to:"/docs/installation",class:"button button--secondary",children:"Installation"}),(0,h.jsx)(i.Z,{to:"/docs/quick-start",class:"button button--primary",children:"Quick Start"}),(0,h.jsx)("div",{className:d.indexCtasGitHubButtonWrapper,children:(0,h.jsx)("iframe",{className:d.indexCtasGitHubButton,src:"https://ghbtns.com/github-btn.html?user=konodyuk&repo=obsidian-typing&type=star&count=true&size=large",width:160,height:30,title:"GitHub Stars"})})]})]})]})})})}function u(){const{siteConfig:e}=(0,r.Z)();return(0,h.jsxs)(c.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />",children:[(0,h.jsx)(x,{}),(0,h.jsxs)("main",{children:[(0,h.jsx)("div",{class:"hero hero--dark",children:(0,h.jsx)("div",{class:"container",children:(0,h.jsxs)("div",{class:"row",children:[(0,h.jsxs)("div",{class:"col vert-center",children:[(0,h.jsx)("h1",{class:"hero__title",children:"Configuration as Code"}),(0,h.jsxs)("p",{class:"hero__subtitle",children:["Unleash the Obsidian Typing Language (OTL) for Ultimate Customization:",(0,h.jsxs)("ul",{className:"margin-top--sm",children:[(0,h.jsxs)("li",{children:[(0,h.jsx)("b",{children:"Starting Out:"})," Quickly categorize notes with specific folders, icons, and field structures. Experience a more structured and personalized note-taking journey."]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("b",{children:"Going Deeper:"})," Dive deep with advanced customizations, utilizing complex note type inheritance and beyond. Customize Obsidian intricately to your workflows and imagination."]})]})]})]}),(0,h.jsx)("div",{class:"col",children:(0,h.jsx)(t.Z,{language:"otl",children:a('\n                                    import { Hierarchical } from "../hierarchical"\n                                    import { Actionable } from "../actionable"\n\n                                    type Issue extends Hierarchical, Actionable {\n                                        folder = "typed/issues"\n                                        prefix = "I-{serial}"\n\n                                        fields {\n                                            tags: List[Tag[dynamic=true]]\n                                            due: Date\n                                        }\n\n                                        style {\n                                            header = fn"""..."""\n                                            link = fn"""..."""\n                                            css_classes = ["max-width"]\n                                        }\n\n                                        hooks {\n                                            on_create = fn"""..."""\n                                            on_open = fn"""..."""\n                                        }\n\n                                        methods {\n                                            children = expr"""..."""\n                                        }\n                                    }\n                                ')})})]})})}),(0,h.jsx)("div",{class:"hero",children:(0,h.jsx)("div",{class:"container",children:(0,h.jsxs)("div",{class:(0,o.Z)("row",d.rowReverse),children:[(0,h.jsxs)("div",{class:"col col--4",children:[(0,h.jsx)("h1",{class:"hero__title",children:"Field Types"}),(0,h.jsx)("p",{class:"hero__subtitle",children:"Precisely define field types for every note type, ensuring consistent structure across notes. Benefit from an intuitive UI, making both note creation and modifications streamlined and user-friendly."})]}),(0,h.jsx)("div",{class:"col col--4",children:(0,h.jsx)("center",{children:(0,h.jsx)("img",{className:d.imgDemo,src:"/img/issue-prompt-1-3.png"})})}),(0,h.jsx)("div",{class:"col col--4",children:(0,h.jsx)(t.Z,{language:"otl",children:a('\n                                    type Issue {\n                                        folder = "typed/issues"\n                                        icon = "far fa-circle-dot"\n                                        prefix = "I-{serial}"\n\n                                        fields {\n                                            status: Choice["backlog", "open", "closed"] = "backlog"\n                                            priority: Number[min=1, max=5] = 2\n                                            in: Note["Project", "Issue"]\n                                            deps: List[Note["Issue"]]\n                                            tags: List[Tag[dynamic=true]]\n                                            due: Date\n                                        }\n                                    }\n                                ')})})]})})}),(0,h.jsx)("div",{class:"hero hero--dark",children:(0,h.jsxs)("div",{class:"container",children:[(0,h.jsxs)("div",{class:"row margin-bottom--md",children:[(0,h.jsxs)("div",{class:"col col--6 vert-center",children:[(0,h.jsx)("h1",{class:"hero__title",children:"Headers & Footers"}),(0,h.jsx)("p",{class:"hero__subtitle",children:"Enhance your notes using auto-injected React components or Markdown content in headers and footers, avoiding unnecessary template clutter."})]}),(0,h.jsx)("div",{class:"col col--6",children:(0,h.jsx)(t.Z,{language:"otl",children:a('\n                                    type Issue {\n                                        style {\n                                            header = fn"""\n                                                import {Breadcrumb} from "packages/breadcrumb"\n                                                import {Wikihead} from "packages/wiki"\n                                                return <>\n                                                    <Breadcrumb note={note} base={"apps/Issues.md"} />\n                                                    <Wikihead note={note} exclude={["in"]} />\n                                                </>\n                                            """\n                                            footer = fn"""\n                                                import {IssueFooter} from "./footer"\n                                                return <IssueFooter note={note} />\n                                            """\n                                        }\n                                    }\n                                ')})})]}),(0,h.jsxs)("div",{class:"row",children:[(0,h.jsxs)("div",{class:"col col--6",children:[(0,h.jsx)("center",{children:(0,h.jsx)("h2",{children:"Source Mode"})}),(0,h.jsx)(t.Z,{language:"markdown",children:a('\n                                    status :: active\n                                    priority :: 4\n                                    in :: [[PRJ Project One]]\n                                    due :: 2023-10-31\n                                    deps :: [[I-1 Do this]], [[I-4 Write docs!!!]]\n                                    tags :: "refactor",\n\n                                    Subtasks:\n                                    - [ ] one\n                                    - [ ] two\n                                ')})]}),(0,h.jsx)("div",{class:"col col--6",children:(0,h.jsxs)("center",{children:[(0,h.jsx)("h2",{children:"Preview Mode"}),(0,h.jsx)("img",{className:d.imgDemo,src:"/img/issue-header-footer-1.png"})]})})]})]})}),(0,h.jsx)("div",{class:"hero",children:(0,h.jsx)("div",{class:"container",children:(0,h.jsxs)("div",{class:(0,o.Z)("row",d.rowReverse),children:[(0,h.jsxs)("div",{class:"col col--6 vert-center",children:[(0,h.jsx)("h1",{class:"hero__title",children:"Interactive Links"}),(0,h.jsx)("p",{class:"hero__subtitle",children:'Replace internal links with dynamic React components. Visualize "Project" statuses or display avatars for "Person" notes seamlessly.'}),(0,h.jsx)("center",{className:"margin-top--lg",children:(0,h.jsx)("h2",{children:"Source Mode"})}),(0,h.jsx)(t.Z,{language:"markdown",children:a("\n                                    - Discussed [[PRJ Project One]] with [[@ElonMusk]] and [[@JohnDoe]]\n                                ")}),(0,h.jsxs)("center",{children:[(0,h.jsx)("h2",{children:"Preview Mode"}),(0,h.jsx)("img",{className:d.imgDemo,src:"/img/links-1.png"})]})]}),(0,h.jsx)("div",{class:"col col--6",children:(0,h.jsx)(t.Z,{language:"otl",children:a('\n                                    type Person {\n                                        style {\n                                            link = fn"""\n                                                import {Container, Avatar, Icon} from "./utils.tsx"\n\n                                                const abbrev = note.page.name[0] + note.page.surname[0];\n                                                const photo = note.methods.photo();\n                                                if (photo)\n                                                    return <Container><Avatar src={src} />{abbrev}</Container>;\n                                                }\n                                                return <Container><Icon className="far fa-user" />{abbrev}</Container>;\n                                            """\n                                        }\n                                        methods {\n                                            photo = fn"""() => {\n                                                const page = note.page\n                                                if (!page.photo) return;\n\n                                                const vault = api.app.vault;\n                                                const tfile = vault.getAbstractFileByPath(page.photo.path)\n                                                if (!tfile) return;\n\n                                                return vault.getResourcePath(tfile)\n                                            }"""\n                                        }\n                                    }\n                                ')})})]})})}),(0,h.jsx)("div",{class:"hero hero--dark",children:(0,h.jsx)("div",{class:"container",children:(0,h.jsxs)("div",{class:(0,o.Z)("row"),children:[(0,h.jsxs)("div",{class:"col vert-center",children:[(0,h.jsx)("h1",{class:"hero__title",children:"CSS Classes or Code"}),(0,h.jsx)("p",{class:"hero__subtitle",children:"Bypass individual note styling in Obsidian. Apply CSS classes or inject CSS code across the entire note types."})]}),(0,h.jsx)("div",{class:"col",children:(0,h.jsx)(t.Z,{language:"otl",children:a('\n                                    type A extends B {\n                                        style {\n                                            css = css"""\n                                                & a {\n                                                    text-decoration: underline\n                                                }\n                                            """\n                                            css_classes = ["max-width", "cards"]\n                                        }\n                                    }\n                                ')})})]})})}),(0,h.jsx)("div",{class:"hero",children:(0,h.jsx)("div",{class:"container",children:(0,h.jsxs)("div",{class:(0,o.Z)("row",d.rowReverse),children:[(0,h.jsxs)("div",{class:"col col--4 vert-center",children:[(0,h.jsx)("h1",{class:"hero__title",children:"Dynamic Prefixes"}),(0,h.jsx)("p",{class:"hero__subtitle",children:"Craft personalized note naming conventions with versatile prefixes. From serial numbers to compact dates and beyond, tailor your prefixes to your needs."})]}),(0,h.jsxs)("div",{class:"col col--4",children:[(0,h.jsx)(t.Z,{language:"otl",children:a('\n                                    type Meeting {\n                                        prefix = "MTN-{serial}"\n                                    }\n                                ')}),(0,h.jsx)("b",{children:"Serial number:"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:"MTN-1"})}),(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:"MTN-2"})}),(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:"MTN-3"})}),(0,h.jsx)("li",{children:"..."})]})]}),(0,h.jsxs)("div",{class:"col col--4",children:[(0,h.jsx)(t.Z,{language:"otl",children:a('\n                                    type Meeting {\n                                        prefix = "MTN-{date_compact}"\n                                    }\n                                ')}),(0,h.jsx)("b",{children:"Leverage Zettelkasten-style prefixes in a compact form:"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:"MTN-M1A9WM"})}),(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:"MTN-N6BF3d"})}),(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:"MTN-N869mz"})}),(0,h.jsx)("li",{children:"..."})]})]})]})})}),(0,h.jsx)("div",{class:"hero hero--dark",children:(0,h.jsx)("div",{class:"container",children:(0,h.jsxs)("div",{class:(0,o.Z)("row"),children:[(0,h.jsxs)("div",{class:"col col--4 vert-center",children:[(0,h.jsx)("h1",{class:"hero__title",children:"Advanced Scripting & Module System"}),(0,h.jsx)("p",{class:"hero__subtitle",children:"Effortlessly import OTL types and [J/T]S[X] symbols with intuitive syntax. Rapidly develop your headers, while we watch module changes and refresh your components in real time."})]}),(0,h.jsxs)("div",{class:"col col--4",children:[(0,h.jsx)(t.Z,{language:"otl",title:"typing.otl",children:a('\n                                    import {A} from "packages/a"\n                                ')}),(0,h.jsx)(t.Z,{language:"otl",title:"packages/a/index.otl",children:a('\n                                    import {B} from "packages/b"\n                                    type A extends B {\n                                        style {\n                                            header = fn"""\n                                                import {Breadcrumb} from "./breadcrumb"\n                                                return <Breadcrumb note={note} />\n                                            """\n                                        }\n                                    }\n                                ')})]}),(0,h.jsxs)("div",{class:"col col--4",children:[(0,h.jsx)(t.Z,{language:"tsx",title:"packages/a/breadcrumb.tsx",children:a('\n                                    import * as Utils from "packages/utils"\n                                    export const Breadcrumb = ({note}) => {\n                                        // ...\n                                    }\n                                ')}),(0,h.jsx)(t.Z,{language:"tsx",title:"packages/utils/index.js",children:a('\n                                        export function do_something() {\n                                            return "something"\n                                        }\n                                ')})]})]})})}),(0,h.jsx)("div",{class:"hero",children:(0,h.jsx)("div",{class:"container",children:(0,h.jsxs)("div",{class:(0,o.Z)("row",d.rowReverse),children:[(0,h.jsxs)("div",{class:"col vert-center",children:[(0,h.jsx)("h1",{class:"hero__title",children:"Full-featured OTL Editor"}),(0,h.jsx)("p",{class:"hero__subtitle",children:"Discover OTL with confidence. Enjoy syntax autocompletion, handy widgets, and real-time linting, making OTL development a breeze."})]}),(0,h.jsx)("div",{class:"col",children:(0,h.jsx)("center",{children:(0,h.jsx)("img",{className:d.imgDemo,src:"/img/editor-2.png"})})})]})})}),(0,h.jsx)("div",{class:"hero hero--dark",children:(0,h.jsx)("div",{class:"container",children:(0,h.jsxs)("div",{class:"row",children:[(0,h.jsxs)("div",{class:"col col--6 vert-center",children:[(0,h.jsx)("h1",{class:"hero__title",children:"Community Packages"}),(0,h.jsx)("p",{class:"hero__subtitle",children:"An ecosystem of packages awaits! Create them to share your vision, or install to improve your workflow."})]}),(0,h.jsxs)("div",{class:"col col--6",children:[(0,h.jsx)("p",{children:(0,h.jsx)("b",{children:"Use packages as easily as:"})}),(0,h.jsx)(t.Z,{language:"otl",title:"typing.otl",children:a('\n                                    import { Issue, Project, _IssuesApp } from "konodyuk:issues@1.0"\n                                ')}),(0,h.jsx)(t.Z,{language:"md",title:"apps/Issues.md",children:a("\n                                        ---\n                                        _type: _IssuesApp\n                                        ---\n                                ")})]})]})})}),(0,h.jsx)("div",{class:(0,o.Z)("hero","",d.heroBanner),children:(0,h.jsxs)("div",{class:"container",children:[(0,h.jsx)("h1",{class:"hero__title",children:"...And More. Get Started"}),(0,h.jsxs)("div",{class:d.indexCtas,children:[(0,h.jsx)(i.Z,{to:"/docs/installation",class:"button button--secondary",children:"Installation"}),(0,h.jsx)(i.Z,{to:"/docs/quick-start",class:"button button--primary",children:"Quick Start"})]})]})})]})]})}}}]);