(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});a(34);var r=a(7),n=a.n(r),i=a(0),s=a.n(i),o=a(152),l=a(159),c=a(156),d=a(157),u=a(153),f=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,n=a.next;return s.a.createElement(c.a,{location:this.props.location,title:t},s.a.createElement(d.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),s.a.createElement("h1",null,e.frontmatter.title),s.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-1)})},e.frontmatter.date),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),s.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),s.a.createElement(l.a,null),s.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},s.a.createElement("li",null,r&&s.a.createElement(o.a,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),s.a.createElement("li",null,n&&s.a.createElement(o.a,{to:n.fields.slug,rel:"next"},n.frontmatter.title," →"))))},t}(s.a.Component);t.default=f;var p="3654438753"},152:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(154);var c=n.a.createContext({}),d=function(e){return n.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},153:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var r=a(164),n=a.n(r),i=a(165),s=a.n(i);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new n.a(s.a);var l=o.rhythm,c=o.scale},154:function(e,t,a){var r;e.exports=(r=a(155))&&r.default||r},155:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},156:function(e,t,a){"use strict";a(34);var r=a(7),n=a.n(r),i=a(0),s=a.n(i),o=a(152),l=a(153),c=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,n=t.children;return e="/"===a.pathname?s.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):s.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},s.a.createElement("header",null,e),s.a.createElement("main",null,n),s.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(s.a.Component);t.a=c},157:function(e,t,a){"use strict";var r=a(158),n=a(0),i=a.n(n),s=a(4),o=a.n(s),l=a(166),c=a.n(l);function d(e){var t=e.description,a=e.lang,n=e.meta,s=e.keywords,o=e.title,l=r.data.site,d=t||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(n)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d},158:function(e){e.exports={data:{site:{siteMetadata:{title:"YShean Dev Log",description:"Built with <3 and GatsbyJS.",author:"Yong Shean"}}}}},159:function(e,t,a){"use strict";a(160);var r=a(162),n=a(0),i=a.n(n),s=a(152),o=a(163),l=a.n(o),c=a(153);var d="755111422";t.a=function(){return i.a.createElement(s.b,{query:d,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,a)," who lives and works in Kuala Lumpur building useful things."," ",i.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"You should follow her on Twitter")))},data:r})}},160:function(e,t,a){"use strict";a(161)("fixed",function(e){return function(){return e(this,"tt","","")}})},161:function(e,t,a){var r=a(11),n=a(18),i=a(19),s=/"/g,o=function(e,t,a,r){var n=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},162:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAE1ElEQVQ4y1VUa0wUVxQeQJSXi4R98nJZYFnYB49FAQUlwVKNJjUFtLCAUMDUtpZCrKSlpalVVKjY0kREmqqIKMqCFSi4vBZtgZKC4WElpagtpmqp/NACYXfmnt57h6hMcnLOnDnfN993Z+5lGHwpvcUkMcEKmR3JXiLXBH2w4vmG0EBYp/FDkVp/FB2ihCidEuEeR+oAb/FxMvtRdqINyXeaypll11rJGluS3Zzt1WGqtXOUTK3gonQBQILcbwxTkUCx+mDyEpC5u+QsCaJCnBwwhfMqO0bi5sycLcmnxCq5tCMmXEVILIQEZ6LuhcIwlRzWa/3ZuHUaCPKV/YUhqwlO6OrEuDis4NV5iV2pOpGr48aIYAVRwW2KUFOrIYE+KFAuBY2/J+iD5JC8JRptDg9CUSFKFgcIBQ5JBOshFFCVVKHSR0KpFR7CT4ktos7fW4TUCk+UGB8NR/Oy4YeKw3Cn6XuAcTOqPXwQKX3EFqLS18P9yJKzFVShq9NKJiYskLJjC6fI2mj9PC1fvJMGk83nMUEvwJ+3+fhjAOBOL429b75u1Sm9Qa3wqCTYzfogW4GTPW85JMCLEso93Et12Jqp8pgFRnvQg/Z6+Lu7CdhRM43pzgb4rek8LAy2o/GGaosuwAvkSwoxMW/ZUvkeI5e68ZaFToW5O7cAjJmt0+116D5WOHalGqy3O8E63AnDF0/Bg5Ya+LfHiOb6W63bNoTCen9ZHhXl52EH9YUMc7/qkxe/jrEop7koK4msE3v2q0PotRg9DNZWAIx2kR7c+u44JMRGwNXTJ9HcQCubtSMObpYVGAk2JqfAZrKigGF+//pDZravlX7lfxq+OWs8lIcttVkedhuhsbwYPem9BjDSjUm7gdRG3HtkboLZW9cWqw9kwX8tp6sI9ll/i+1E2T5e2eO6Up6wtkT1tLlqAYbasaIeDib7yEdB1iEToPGbtOZ7Zo77tQ0eXq149vxKmR/BPqo9asuT1Z+gme1roos6XVOyb958GSvqYTERQmO9aL7/OrIMdyBMislvIKyWm+u5BI8vHssmGOhrpNh7lXgNR4pTGZgeZ6JcX27D60fyx2GqH9BIlwUNtADbWYesplpEaky2SJ4NVR1qpWQAtqEkj/ZQLnrdO3Xw1W29MkHrWzDXfekpTA2C9UYNu1heACSspgsc6c38eG4xZaMmjQwPlO6nVqe+PbD8cPByp1uSMcRHOuK0aqbmy+h5c/0s3P0ZuCETxw2bOFIv9F55Oln58SYyu9BWTa0mRga/JBJIo5nYrFr+xPENpxmeTdDBuyf2Z0LHGYBfGlkYMLJgOgN3yz+gvmCsi/67gSE7eaIWYNbKY/haGvgGI9MZ7Dxjiqj8csM2/nzU79pXkPE+XP680Hq5uJDNT38XtPqkZEp4Mo7OeMd+ZivRpNq5+21fIlPvtnnV+o41jI1QkSAQqZK3uwUZJuwVKeASsJsTKFO5lX4GwL1xkWrXVlnA1tUJLswyrDiIP2wZL3m0o0ybkivRGM6J1an9IrVhRqTNBLE2C6S6PZxYuwfXGUt1Fog0mYBnnpBZjLkg1by118Vd48CvoU/8Gok2bUAamgvikBwQad/mAZoMTqhOJ4HrdERDnQH4niXP6AyeJRgJwWoMPznKYgX/AxjqfXLFm5CUAAAAAElFTkSuQmCC",width:50,height:50,src:"/static/b7a9452a09b372ab87423807c22263e9/58398/myAvatar.png",srcSet:"/static/b7a9452a09b372ab87423807c22263e9/58398/myAvatar.png 1x,\n/static/b7a9452a09b372ab87423807c22263e9/fd23f/myAvatar.png 1.5x,\n/static/b7a9452a09b372ab87423807c22263e9/fc368/myAvatar.png 2x,\n/static/b7a9452a09b372ab87423807c22263e9/521d9/myAvatar.png 3x"}}},site:{siteMetadata:{author:"Yong Shean",social:{twitter:"shin_chong"}}}}}},163:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),s=r(a(35)),o=r(a(75)),l=r(a(76)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=new WeakMap;var m=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+n+t+s+i+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,d=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},u,{onLoad:s,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:n,fadeIn:i,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,m=e.fixed,y=e.backgroundColor,w=e.durationFadeIn,v=e.Tag,E=e.itemProp,S=this.state.imgLoaded||!1===this.state.fadeIn,O=!0===this.state.fadeIn&&!this.state.imgCached,A=(0,l.default)({opacity:S?1:0,transition:O?"opacity "+w+"ms":"none"},o),L="boolean"==typeof y?"lightgray":y,R={transitionDelay:w+"ms"},C=(0,l.default)({opacity:this.state.imgLoaded?0:1},O&&R,o,f),I={title:t,alt:this.state.isVisible?"":a,style:C,className:p};if(h){var q=h;return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),L&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&R)}),q.base64&&c.default.createElement(b,(0,l.default)({src:q.base64},I)),q.tracedSVG&&c.default.createElement(b,(0,l.default)({src:q.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,q.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:q.srcSetWebp,sizes:q.sizes}),c.default.createElement(b,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},q))}}))}if(m){var k=m,x=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},i);return"inherit"===i.display&&delete x.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},L&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:L,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},O&&R)}),k.base64&&c.default.createElement(b,(0,l.default)({src:k.base64},I)),k.tracedSVG&&c.default.createElement(b,(0,l.default)({src:k.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,k.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),c.default.createElement(b,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},k))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var w=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),v=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var E=y;t.default=E}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-7de5c5105538c3340ca5.js.map