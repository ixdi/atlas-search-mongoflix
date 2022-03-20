"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[976],{4436:function(e,n,t){var r=t(5893);t(7294);n.Z=function(e){var n=e.title,t=e.subtitle;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{className:"text-gray-700 text-2xl font-medium block mt-16",children:n}),(0,r.jsx)("span",{className:"mt-3 text-sm text-gray-500",children:t})]})}},2369:function(e,n,t){var r=t(5893);t(7294);n.Z=function(e){var n=e.children;return(0,r.jsx)("main",{className:"my-8",children:(0,r.jsx)("div",{className:"container mx-auto px-6",children:n})})}},3193:function(e,n,t){var r=t(5893),i=(t(7294),t(1664));n.Z=function(){return(0,r.jsx)("footer",{className:"bg-gray-200",children:(0,r.jsxs)("div",{className:"container mx-auto px-6 py-3 flex justify-between items-center",children:[(0,r.jsx)("div",{className:"text-xl font-bold text-green-500 hover:text-green-400 cursor-pointer",children:(0,r.jsx)(i.default,{href:"/",children:"MongoFlix"})}),(0,r.jsx)("p",{className:"py-2 text-gray-500 sm:py-0",children:"All rights reserved"})]})})}},2484:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(5893),i=t(7294),s=t(1664),o=t(7804),l=function(e){var n=e.text,t=void 0===n?"":n,i=e.highlight,s=void 0===i?"":i;if(!s.trim()||s.includes("(")||s.includes(")"))return(0,r.jsx)("span",{children:t});var o=new RegExp("(".concat(s,")"),"gi"),l=t.split(o);return(0,r.jsx)("span",{children:l.filter(String).map((function(e,n){return o.test(e)?(0,r.jsx)("mark",{className:"bg-green-400",children:e},n):(0,r.jsx)("span",{children:e},n)}))})},a=function(e,n){var t,r,i=null===e||void 0===e?void 0:e.find((function(e){return e.path===n})),s=null===i||void 0===i||null===(t=i.texts)||void 0===t?void 0:t.find((function(e){return"hit"===e.type}));return null!==(r=null===s||void 0===s?void 0:s.value)&&void 0!==r?r:""},c=function(e){var n,t,c,u=e.movie,d=e.showDetail,m=void 0===d||d,x=a(u.highlights,"title"),h=a(u.highlights,"plot"),f=a(u.highlights,"genres"),p=a(u.highlights,"countries"),g=(0,i.useState)(!1);g[0],g[1];return(0,r.jsx)(s.default,{href:"/movies/".concat(u._id),children:(0,r.jsxs)("div",{className:"bg-white w-full max-w-sm mx-auto rounded-xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition relative",children:[(0,r.jsxs)("div",{className:"flex items-end justify-end h-80 w-full bg-cover relative",children:[u.poster&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("span",{className:"h-80 w-full relative overflow-hidden",children:[(0,r.jsx)("img",{src:"https://source.unsplash.com/random/1920x1080",alt:"blur bg",className:"absolute min-w-full max-w-full max-h-full blur-md object-contain -z-10 scale-[3]"}),(0,r.jsx)("img",{src:u.poster,alt:u.title,className:"absolute min-w-full max-w-full max-h-full blur-md object-contain -z-10 scale-[3]"})]}),(0,r.jsx)("img",{src:u.poster,alt:u.title,className:"absolute min-w-full max-w-full max-h-full z-10 object-contain"})]}),(0,r.jsx)("button",{className:"absolute z-10 p-2 rounded-full bg-green-600 text-white mx-5 -mb-4 hover:bg-green-500 focus:outline-none focus:bg-green-500",children:(0,r.jsx)(o.o1U,{className:"w-5 h-5"})})]}),(0,r.jsxs)("div",{className:"px-5 py-3 relative",children:[(0,r.jsx)("h3",{className:"text-gray-800 uppercase text-2xl font-semibold",children:(0,r.jsx)(l,{text:u.title,highlight:x})}),m&&(0,r.jsxs)(r.Fragment,{children:[u.year&&u.genres&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("h4",{className:"text-gray-600 text-sm font-medium",children:[u.year," -",(0,r.jsx)(l,{text:null!==(n=u.genres.join(", "))&&void 0!==n?n:"",highlight:f})]})}),u.countries&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("h4",{className:"text-gray-600 text-sm font-medium",children:(0,r.jsx)(l,{text:null!==(t=u.countries.join(", "))&&void 0!==t?t:"",highlight:p})})}),(0,r.jsx)("h4",{className:"text-gray-600 text-sm mt-2",children:(0,r.jsx)(l,{text:null!==(c=u.plot)&&void 0!==c?c:"",highlight:h})})]})]})]})})}},4976:function(e,n,t){t.r(n),t.d(n,{default:function(){return U},handleError:function(){return R}});var r=t(4051),i=t.n(r),s=t(5893),o=t(9008),l=t(7294),a=t(4436),c=t(2369),u=t(3193),d=t(1664),m=t(7804),x=t(1163),h=t(3815),f=t(8100),p=t(8687),g=function(e){var n=e.list,t=e.selectedList,r=e.addItem,i=e.removeItem;return(0,s.jsx)("div",{id:"dropdown",className:"absolute shadow top-100 bg-white z-40 w-full lef-0 rounded max-h-select overflow-y-auto ",children:(0,s.jsx)("div",{className:"flex flex-col w-full",children:n.map((function(e,n){return t.includes(e.title)?(0,s.jsx)("div",{className:"cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100",onClick:function(){return i(e.title)},children:(0,s.jsx)("div",{className:"flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative bg-green-300",children:(0,s.jsx)("div",{className:"w-full items-center flex",children:(0,s.jsxs)("div",{className:"mx-2 leading-6 ",children:[e.title," ",(0,s.jsx)("span",{className:"text-gray-700 text-sm font-light",children:e.subtitle})]})})})},n):(0,s.jsx)("div",{className:"cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100",onClick:function(){return r(e.title)},children:(0,s.jsx)("div",{className:"flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:bg-green-100",children:(0,s.jsx)("div",{className:"w-full items-center flex",children:(0,s.jsxs)("div",{className:"mx-2 leading-6 ",children:[e.title," ",(0,s.jsx)("span",{className:"text-gray-700 text-sm font-light",children:e.subtitle})]})})})},n)}))})})},v=function(e){var n=e.items,t=e.selectedItems,r=e.setSelectedItems,i=e.placeholder,o=(0,l.useState)(!1),a=o[0],c=o[1],u=function(e){var n=t.filter((function(n){return n!==e}));r(n)};return(0,s.jsx)("div",{className:"autcomplete-wrapper",children:(0,s.jsx)("div",{className:"autcomplete relative my-3 max-w-lg mx-auto",children:(0,s.jsx)("div",{className:"w-full flex flex-col items-center mx-auto",children:(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)("div",{className:"flex flex-col items-center relative",children:(0,s.jsx)("div",{className:"w-full",children:(0,s.jsxs)("div",{className:"p-1 flex border border-gray-200 bg-white rounded focus-within:border-green-500 focus-within:outline-none focus-within: :shadow-outline",children:[(0,s.jsxs)("div",{className:"flex flex-auto flex-wrap",children:[t.map((function(e,n){return(0,s.jsxs)("div",{className:"flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 ",children:[(0,s.jsx)("div",{className:"text-xs font-normal leading-none max-w-full flex-initial",children:e}),(0,s.jsx)("div",{className:"flex flex-auto flex-row-reverse",children:(0,s.jsx)("div",{onClick:function(){return u(e)},children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2",children:[(0,s.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,s.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},n)})),(0,s.jsx)("div",{className:"flex-1",children:(0,s.jsx)("input",{placeholder:i,className:"bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"})})]}),(0,s.jsx)("div",{className:"text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200",onClick:function(){c(!a)},children:(0,s.jsx)("button",{className:"cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-chevron-up w-4 h-4",children:(0,s.jsx)("polyline",{points:"18 15 12 9 6 15"})})})})]})})}),a?(0,s.jsx)(g,{list:n,selectedList:t,addItem:function(e){r(t.concat(e)),c(!1)},removeItem:u}):null]})})})})},y=t(9196),j=t(8346),b=t(1228),w=t(5227),N=t(4283),_=function(e){var n=e.isOpen,t=e.setIsOpen,r=e.codeExamples,i=function(){t(!1)};return(0,s.jsx)(y.u,{appear:!0,show:n,as:l.Fragment,children:(0,s.jsx)(j.V,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto bg-gray-900 bg-opacity-60",onClose:i,children:(0,s.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[(0,s.jsx)(y.u.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsx)(j.V.Overlay,{className:"fixed inset-0"})}),(0,s.jsx)("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),(0,s.jsx)(y.u.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,s.jsxs)("div",{className:"inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",children:[(0,s.jsx)(j.V.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:"Code Example"}),(0,s.jsxs)("div",{className:"mt-2",children:[(0,s.jsx)("p",{className:"text-sm text-gray-500"}),0!==r.length&&(0,s.jsx)(s.Fragment,{children:r.map((function(e){return(0,s.jsx)(b.p,{children:function(n){var t=n.open;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(b.p.Button,{className:"flex justify-between w-full px-4 py-2 my-2 text-sm font-medium text-left text-green-900 bg-green-100 rounded-lg hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75",children:[(0,s.jsx)("span",{children:e.title}),(0,s.jsx)(m.g8U,{className:"".concat(t?"transform rotate-180":""," w-5 h-5 text-green-500")})]}),(0,s.jsx)(y.u,{enter:"transition duration-200 ease-out",enterFrom:"transform origin-bottom scale-y-0 opacity-0",enterTo:"transform origin-top scale-y-100 opacity-100",leave:"transition duration-200 ease-out",leaveFrom:"transform origin-bottom scale-y-150 opacity-100",leaveTo:"transform origin-bottom scale-y-0 opacity-0",children:(0,s.jsx)(b.p.Panel,{className:"px-4 pt-4 pb-2 text-sm text-gray-500",children:(0,s.jsx)(w.Z,{language:"javascript",style:N.cL,children:e.code})})})]})}},e._id)}))})]}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)("button",{type:"button",className:"inline-flex float-right justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500",onClick:i,children:"Done"})})]})})]})})})},k=t(3746),I=[{_id:1,title:"Autocomplete Index",code:'{\n                "mappings": {\n                    "dynamic": true,\n                    "fields": {\n                        "title": [\n                            {\n                                "dynamic": true,\n                                "type": "document"\n                            },\n                            {\n                                "type": "autocomplete"\n                            }\n                        ]\n                    }\n                }\n            }'},{_id:2,title:"Aggregation Pipeline",code:'exports = async (title) => {\n                const collection = context.services.get("mongodb-atlas").db("sample_mflix").collection("movies");\n                return await collection\n                    .aggregate([\n                        {\n                            $search: {\n                                autocomplete: {\n                                    path: "title",\n                                    query: title,\n                                    fuzzy: { maxEdits: 1 },\n                                },\n                            },\n                        },\n                        {\n                            $project: {\n                                title: 1,\n                            },\n                        },\n                        {\n                            $limit: 10,\n                        },\n                    ])\n                    .toArray();\n            };'},{_id:3,title:"GraphQL Request",code:"\n            query GetAutocompleteTitle($title: String!) {\n                autocompleteTitle(input: $title) {\n                    _id\n                    title\n                }\n            }"}],F=[{_id:4,title:"Aggregation Pipeline",code:'exports = async (input) => {\n                const collection = context.services.get("mongodb-atlas").db("sample_mflix").collection("movies");\n                const { term, genres, countries } = input;\n                const searchShould = [];\n                const searchMust = [];\n            \n                if (term.length > 0) {\n                    const termStage = {\n                        autocomplete: {\n                            path: "title",\n                            query: term,\n                            fuzzy: { maxEdits: 1.0 },\n                            score: {\n                                boost: {\n                                    path: "imdb.rating",\n                                    undefined: 1,\n                                },\n                            },\n                        },\n                    };\n                    searchMust.push(termStage);\n            \n                    const plotStage = {\n                        text: {\n                            query: term,\n                            path: "plot",\n                        },\n                    };\n                    searchShould.push(plotStage);\n                }\n            \n                if (genres.length > 0) {\n                    const genresStage = {\n                        text: {\n                            query: genres,\n                            path: "genres",\n                        },\n                    };\n                    searchMust.push(genresStage);\n                }\n            \n                if (countries.length > 0) {\n                    const countryStage = {\n                        text: {\n                            query: countries,\n                            path: "countries",\n                        },\n                    };\n                    searchMust.push(countryStage);\n                }\n            \n                const searchQuery = [\n                    {\n                        $search: {\n                            compound: {\n                                should: searchShould,\n                                must: searchMust,\n                            },\n                            highlight: { path: ["title", "genres", "countries", "plot"] },\n                        },\n                    },\n                    {\n                        $project: {\n                            _id: 1,\n                            title: 1,\n                            poster: 1,\n                            cast: 1,\n                            directors: 1,\n                            plot: 1,\n                            fullplot: 1,\n                            year: 1,\n                            genres: 1,\n                            countries: 1,\n                            imdb: 1,\n                            score: { $meta: "searchScore" },\n                            highlights: { $meta: "searchHighlights" },\n                        },\n                    },\n                    { $limit: 20 },\n                ];\n            \n                return await collection.aggregate(searchQuery).toArray();\n            };'}],S=[{_id:5,title:"Facets Index",code:'{\n                "mappings": {\n                    "dynamic": true,\n                    "fields": {\n                        "title": [\n                            {\n                                "dynamic": true,\n                                "type": "document"\n                            },\n                            {\n                                "type": "autocomplete"\n                            }\n                        ]\n                    }\n                }\n            }'},{_id:6,title:"Aggregation Pipeline",code:'exports = async (arg) => {\n                const collection = context.services.get("mongodb-atlas").db("sample_mflix").collection("movies");\n            \n                return await collection\n                    .aggregate([\n                        {\n                            $searchMeta: {\n                                index: "facets",\n                                facet: {\n                                    operator: {\n                                        range: {\n                                            path: "year",\n                                            gte: 1900,\n                                        },\n                                    },\n                                    facets: {\n                                        genresFacet: {\n                                            type: "string",\n                                            path: "genres",\n                                        },\n                                    },\n                                },\n                            },\n                        },\n                    ])\n                    .toArray();\n            };'}],M=[{_id:7,title:"GraphQL Request",code:"query GetMovies($sortByInput: MovieSortByInput!, $queryInput: MovieQueryInput!, $limit: Int!) {\n                movies(sortBy: $sortByInput, query: $queryInput, limit: $limit) {\n                    _id\n                    title\n                    poster\n                    genres\n                    countries\n                    cast\n                    directors\n                    plot\n                    fullplot\n                    year\n                }\n            }"}];function C(e,n,t,r,i,s,o){try{var l=e[s](o),a=l.value}catch(error){return void t(error)}l.done?n(a):Promise.resolve(a).then(r,i)}function $(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){$(e,n,t[n])}))}return e}var A=function(){var e,n=(e=i().mark((function e(n,t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.bm)();case 2:return r=e.sent,e.abrupt("return",(0,p.request)(h.wj,n,{title:t},r));case 4:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,i){var s=e.apply(n,t);function o(e){C(s,r,i,o,l,"next",e)}function l(e){C(s,r,i,o,l,"throw",e)}o(void 0)}))});return function(e,t){return n.apply(this,arguments)}}(),T=function(e){var n,t=e.genresWithCount,r=e.countries,i=e.filters,o=e.setFilters,a=(0,x.useRouter)(),c=(0,l.useState)(!0),u=c[0],h=c[1],p=(0,l.useState)(""),g=p[0],j=p[1],b=(0,l.useState)(0),w=b[0],N=b[1],C=(0,l.useState)(!1),$=C[0],T=C[1],B=(0,l.useState)([]),P=B[0],D=B[1],Z=function(e,n){T(e),D(n)},E=(0,f.ZP)(["\n    query GetAutocompleteTitle($title: String!) {\n        autocompleteTitle(input: $title) {\n            _id\n            title\n            poster\n        }\n    }\n",g],A).data;if(null===E||void 0===E?void 0:E.error)return R(E.error);var z=null!==(n=null===E||void 0===E?void 0:E.autocompleteTitle)&&void 0!==n?n:[],O=function(e){j(""),a.push({pathname:"/movies/".concat(e)})},G=function(e){"ArrowUp"===e.key&&(e.preventDefault(),N((w-1+z.length)%z.length),console.log(w)),"ArrowDown"===e.key&&(e.preventDefault(),N((w+1)%z.length),console.log(w))};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("header",{children:(0,s.jsxs)("div",{className:"container mx-auto px-6 py-3",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)(d.default,{href:"/",children:(0,s.jsx)("div",{className:"w-full text-green-500 text-2xl font-semibold cursor-pointer",children:"MongoFlix"})}),(0,s.jsxs)(k.v,{as:"div",className:"relative inline-block text-left z-50",children:[(0,s.jsx)("div",{children:(0,s.jsxs)(k.v.Button,{className:"inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",children:["Code",(0,s.jsx)(m.v4q,{className:"w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100","aria-hidden":"true"})]})}),(0,s.jsx)(y.u,{as:l.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,s.jsx)(k.v.Items,{className:"absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:(0,s.jsxs)("div",{className:"px-1 py-1 ",children:[(0,s.jsx)(k.v.Item,{children:function(e){var n=e.active;return(0,s.jsx)("button",{onClick:function(){return Z(!0,I)},className:"".concat(n?"bg-green-100 text-green-500":"text-gray-900"," group flex rounded-md items-center w-full px-2 py-2 text-sm"),children:"Autocomplete"})}}),(0,s.jsx)(k.v.Item,{children:function(e){var n=e.active;return(0,s.jsx)("button",{onClick:function(){return Z(!0,F)},className:"".concat(n?"bg-green-100 text-green-500":"text-gray-900"," group flex rounded-md items-center w-full px-2 py-2 text-sm"),children:"Multiple Search Criteria"})}}),(0,s.jsx)(k.v.Item,{children:function(e){var n=e.active;return(0,s.jsx)("button",{onClick:function(){return Z(!0,S)},className:"".concat(n?"bg-green-100 text-green-500":"text-gray-900"," group flex rounded-md items-center w-full px-2 py-2 text-sm"),children:"Facets"})}}),(0,s.jsx)(k.v.Item,{children:function(e){var n=e.active;return(0,s.jsx)("button",{onClick:function(){return Z(!0,M)},className:"".concat(n?"bg-green-100 text-green-500":"text-gray-900"," group flex rounded-md items-center w-full px-2 py-2 text-sm"),children:"Top 50 Movies"})}})]})})})]})]}),(0,s.jsx)(_,{isOpen:$,setIsOpen:T,codeExamples:P}),(0,s.jsxs)("div",{className:"relative mt-6 max-w-lg mx-auto",children:[(0,s.jsx)("span",{className:"absolute inset-y-0 left-0 pl-3 flex items-center",children:(0,s.jsx)(m.W1M,{className:"h-5 w-5"})}),(0,s.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),h(!1),z.length>0&&w<z.length){var n=z[w]._id;O(n)}},children:(0,s.jsx)("input",{className:"w-full border rounded-md pl-10 pr-4 py-2 focus:border-green-500 focus:outline-none focus:shadow-outline",type:"text",placeholder:"Search",onChange:function(e){return n=e.target.value,h(!0),j(n),void o(q({},i,{term:n}));var n},onBlur:function(){return h(!1)},onFocus:function(){return h(!0)},value:g,onKeyDown:G})}),z.length>0&&u&&(0,s.jsx)("ul",{className:"absolute inset-x-0 top-full bg-white border border-green-500 rounded-md z-20",tabIndex:0,onKeyDown:G,children:z.map((function(e,n){return(0,s.jsx)("li",{className:"px-4 py-2\n                                            ".concat(w===n?"bg-green-300":""," hover:bg-green-300 cursor-pointer"),onMouseDown:function(e){return e.preventDefault()},onClick:function(){return O(e._id)},children:e.title},e._id)}))})]}),(0,s.jsx)(v,{items:t.map((function(e){return{title:e._id,subtitle:e.count}})),selectedItems:i.genres,setSelectedItems:function(e){o(q({},i,{genres:e}))},placeholder:"Select Genres"}),(0,s.jsx)(v,{items:r.map((function(e){return{title:e._id,subtitle:e.count}})),selectedItems:i.countries,setSelectedItems:function(e){o(q({},i,{countries:e}))},placeholder:"Select Countries"})]})})})},B=t(2484),P=function(e){var n=e.movies;return(0,s.jsx)("div",{className:"grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6",children:n.map((function(e){return(0,s.jsx)(B.Z,{movie:e},e._id)}))})},D=[{_id:"Drama",count:""},{_id:"Comedy",count:""},{_id:"Romance",count:""},{_id:"Crime",count:""},{_id:"Thriller",count:""},{_id:"Action",count:""},{_id:"Documentary",count:""},{_id:"Adventure",count:""},{_id:"Horror",count:""},{_id:"Biography",count:""}],Z=[{_id:"Australia"},{_id:"Austria"},{_id:"Belgium"},{_id:"China"},{_id:"Denmark"},{_id:"Finland"},{_id:"France"},{_id:"Germany"},{_id:"Hong Kong"},{_id:"Israel"},{_id:"Italy"},{_id:"Japan"},{_id:"Mexico"},{_id:"New Zealand"},{_id:"Norway"},{_id:"Poland"},{_id:"Romania"},{_id:"Russia"},{_id:"Spain"},{_id:"Sweden"},{_id:"Switzerland"},{_id:"Taiwan"},{_id:"UK"},{_id:"USA"}];function E(e,n,t,r,i,s,o){try{var l=e[s](o),a=l.value}catch(error){return void t(error)}l.done?n(a):Promise.resolve(a).then(r,i)}function z(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var s=e.apply(n,t);function o(e){E(s,r,i,o,l,"next",e)}function l(e){E(s,r,i,o,l,"throw",e)}o(void 0)}))}}var O=function(){var e=z(i().mark((function e(n,t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.bm)();case 2:return r=e.sent,e.abrupt("return",(0,p.request)(h.wj,n,{sortByInput:"METACRITIC_DESC",queryInput:{poster_exists:!0,genres_in:t.genres.length>0?t.genres:void 0,countries_in:t.countries.length>0?t.countries:void 0},limit:50},r));case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),G=function(){var e=z(i().mark((function e(n,t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.bm)();case 2:return r=e.sent,e.abrupt("return",(0,p.request)(h.wj,n,{filter:t},r));case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),L=function(){var e=z(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.bm)();case 2:return t=e.sent,e.abrupt("return",(0,p.request)(h.wj,n,null,t));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),R=function(e){return console.error(e),(0,s.jsxs)("p",{children:["An error occurred: $",e]})};function U(){var e,n,t=(0,l.useState)({term:"",genres:[],countries:[]}),r=t[0],i=t[1],d=(0,f.ZP)(["\n    query GetMovies($sortByInput: MovieSortByInput!, $queryInput: MovieQueryInput!, $limit: Int!) {\n        movies(sortBy: $sortByInput, query: $queryInput, limit: $limit) {\n            _id\n            title\n            poster\n            genres\n            countries\n            cast\n            directors\n            plot\n            fullplot\n            year\n        }\n    }\n",r],O).data;if(null===d||void 0===d?void 0:d.error)return R(d.error);var m,x=null!==(n=null===d||void 0===d?void 0:d.movies)&&void 0!==n?n:[],h=(0,f.ZP)(["\n    query GetFilteredMovies($filter: FilteredMoviesInput!) {\n        filteredMovies(input: $filter) {\n            _id\n            title\n            poster\n            cast\n            directors\n            plot\n            fullplot\n            year\n            score\n            genres\n            countries\n            imdb {\n                id\n                rating\n                votes\n            }\n            highlights {\n                path\n                score\n                texts {\n                    value\n                    type\n                }\n            }\n        }\n    }\n",r],G).data;if(null===h||void 0===h?void 0:h.error)return R(error);var p,g,v=null!==(m=null===h||void 0===h?void 0:h.filteredMovies.filter((function(e){return e.imdb.rating>=8.5})))&&void 0!==m?m:[],y=null!==(p=null===h||void 0===h?void 0:h.filteredMovies.filter((function(e){return e.imdb.rating<8.5||!e.imdb})))&&void 0!==p?p:[],j=(0,f.ZP)(["\n    query GetFacetsGenres {\n        facetsGenres {\n            count\n            facet {\n                genresFacet {\n                    buckets {\n                        _id\n                        count\n                    }\n                }\n            }\n        }\n    }\n"],L).data;if(null===j||void 0===j?void 0:j.error)return R(j.error);var b=null!==(g=null===(e=null===j||void 0===j?void 0:j.facetsGenres[0])||void 0===e?void 0:e.facet.genresFacet.buckets)&&void 0!==g?g:D,w=Z;return(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen",children:[(0,s.jsxs)(o.default,{children:[(0,s.jsx)("title",{children:"MongoFlix"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("div",{className:"bg-gray-100 w-full min-h-screen",children:[(0,s.jsx)(T,{genresWithCount:b,countries:w,filters:r,setFilters:i}),(0,s.jsxs)(c.Z,{children:[v.length>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{title:"\ud83c\udf7f Featured on IMDB",subtitle:1===v.length?"1 Movie":"".concat(v.length," Movies")}),(0,s.jsx)(P,{movies:v})]}),y.length>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{title:"\ud83d\udd0d Movie Search Results",subtitle:1===y.length?"1 Movie":"".concat(y.length," Movies")}),(0,s.jsx)(P,{movies:y})]}),0===v.length&&0===y.length&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{title:"\ud83c\udfac All Time Favorite Movies",subtitle:"".concat(y.length>0?y.length:x.length," Movies")}),(0,s.jsx)(P,{movies:y.length>0?y:x})]})]}),(0,s.jsx)(u.Z,{})]})]})}},3815:function(e,n,t){t.d(n,{wj:function(){return d},bm:function(){return x}});var r=t(4051),i=t.n(r),s=t(9566);function o(e,n,t,r,i,s,o){try{var l=e[s](o),a=l.value}catch(error){return void t(error)}l.done?n(a):Promise.resolve(a).then(r,i)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var s=e.apply(n,t);function l(e){o(s,r,i,l,a,"next",e)}function a(e){o(s,r,i,l,a,"throw",e)}l(void 0)}))}}var a,c="application-0-kjasg",u=null!==(a=t(3454).env.NEXT_PUBLIC_REALM_BASE_URL)&&void 0!==a?a:"eu-central-1.aws.realm.mongodb.com",d="https://".concat(u,"/api/client/v2.0/app/").concat(c,"/graphql"),m=new s.gV({id:c,baseUrl:"https://".concat(u)}),x=function(){var e=l(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m.currentUser){e.next=5;break}return e.next=3,m.logIn(s.cN.anonymous());case 3:e.next=7;break;case 5:return e.next=7,m.currentUser.refreshCustomData();case 7:return n=m.currentUser.accessToken,e.abrupt("return",{Authorization:"Bearer ".concat(n)});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!function(){var e=l(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.cN.anonymous(),e.prev=1,e.next=4,m.logIn(n);case 4:return t=e.sent,e.next=7,t.functions.nameOfRealmFunction();case 7:e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))}()}}]);