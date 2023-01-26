const heading=React.createElement('h1',{style:{textAlign:'center'}},'About Us');
const content=React.createElement('p',{style:{textAlign:'center',fontSize:'1.3rem'}},'At Zappos.com Our purpose is simple: to live and deliver WOW');

const content1=React.createElement('p',{style:{textAlign:'center',fontSize:'1.3rem'}},'Twenty years ago, we began as a small online retailer that only sold shoes. Today, we still sell shoes — as well as clothing, handbags, accessories, and more. That "more" is providing the very best customer service, customer experience, and company culture. We aim to inspire the world by showing its possible to simultaneously deliver happiness to customers, employees, vendors, shareholders, and the community in a long-term, sustainable way.');
const content2=React.createElement('p',{style:{textAlign:'center',fontSize:'1.3rem'}},'We hope that in the future people wont even realize we started selling shoes online. Instead, theyll know Zappos as a service company that just happens to sell ________.');
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render([heading,content,content1,content2]);