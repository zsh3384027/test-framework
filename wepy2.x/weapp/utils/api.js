"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function getNews() {
  return JSON.parse(JSON.stringify([{
    'id': 81053,
    'post_id': '5173984',
    'author_name': '头条新闻',
    'cover': 'https://tvax2.sinaimg.cn/crop.18.21.500.500.180/60718250ly1fe7kog3jroj20f00f03zj.jpg',
    'imgs': ['https://images.weserv.nl/?url=wx2.sinaimg.cn/orj360/60718250ly1g1dllvdevtj20cj0aljrr.jpg', 'https://images.weserv.nl/?url=wx2.sinaimg.cn/large/62b2e41fly1g3960nkxrnj20go0godi4.jpg'],
    'share': 14.9,
    'comment': 24.1,
    'thumbs': 50.9,
    'published_at': '昨天 14:03:27',
    'form': '来自 ipone客户端',
    'content': '#大城市女性买房猛增#【74.2％未受伴侣资助】随着单身女性成为新买家，中国房地产开发商正在改变策略，某售房平台对其平台上房产交易分析后发现，47.9%买家是女性，74.2%的女性买房时没有接受伴侣的资助，其中45.2%接受了父母资助，29%能完全凭一己之力买房。买房的单身女性表示能够感到更有安全感。 ',
    'active': false
  }, {
    'id': 81052,
    'post_id': '5173990',
    'author_name': '明天见',
    'cover': 'https://tvax2.sinaimg.cn/crop.0.0.512.512.180/79671892ly8g1bs3ucet0j20e80e80te.jpg',
    'imgs': ['https://images.weserv.nl/?url=wx3.sinaimg.cn/large/575ed5f7ly1g395kxonkyj24mo3344r5.jpg'],
    'share': 3.2,
    'comment': 1.4,
    'thumbs': 2.7,
    'published_at': '昨天 13:54:51',
    'form': '来自 ipone X',
    'content': '#遇见美好#',
    'active': false
  }, {
    'id': 81051,
    'post_id': '5173993',
    'author_name': '江苏小报',
    'cover': 'https://tvax3.sinaimg.cn/crop.13.0.614.614.180/5ba8d1cbly8fesjytq8a0j20hs0h2754.jpg',
    'imgs': ['https://images.weserv.nl/?url=wx2.sinaimg.cn/orj360/0077ZSQ3ly1g1donnenrcj30j6129gnn.jpg', 'https://images.weserv.nl/?url=wx3.sinaimg.cn/orj360/0077ZSQ3ly1g1donmjwjlj30v91umgqa.jpg', 'https://images.weserv.nl/?url=wx4.sinaimg.cn/orj360/0077ZSQ3ly1g1dono0wbaj30tz1e6tau.jpg', 'https://images.weserv.nl/?url=wx3.sinaimg.cn/orj360/0077ZSQ3ly1g1dono6h2jj30qo1a2mz1.jpg', 'https://images.weserv.nl/?url=wx1.sinaimg.cn/orj360/0077ZSQ3ly1g1donmu32fj30rr1ci409.jpg'],
    'share': 19,
    'comment': 5.4,
    'thumbs': 2.7,
    'published_at': '昨天 13:53:24',
    'form': '来自 vivo x27 4800万三摄',
    'content': '智能设备的普及，增加了人们之间的距离。',
    'active': false
  }, {
    'id': 81050,
    'post_id': '5173989',
    'author_name': '旅游攻略君',
    'cover': 'https://tva4.sinaimg.cn/crop.0.0.1440.1440.180/b2b2dfe6jw8etfit6y75oj2140140gpu.jpg',
    'imgs': ['https://images.weserv.nl/?url=wx2.sinaimg.cn/orj360/b2b2dfe6gy1g1cngohldhj21400tq76f.jpg'],
    'share': 10.5,
    'comment': 1,
    'thumbs': 2,
    'published_at': '昨天 13:52:54',
    'form': '来自 微博',
    'content': '过.',
    'active': false
  }, {
    'id': 81049,
    'post_id': '5173969',
    'author_name': '时尚男人装',
    'cover': 'https://tva4.sinaimg.cn/crop.0.0.1080.1080.180/60da5d47jw8esd1q1zlzmj20u00u076v.jpg',
    'imgs': ['https://images.weserv.nl/?url=wx3.sinaimg.cn/orj360/60da5d47ly1g1dawmc8j4j23qc2hf7wo.jpg'],
    'share': 55.6,
    'comment': 4.1,
    'thumbs': 11,
    'published_at': '昨天 13:40:08',
    'form': '',
    'content': '如果青春不过气，哪里都是美好的春天',
    'active': false
  }, {
    'id': 81048,
    'post_id': '5173981',
    'author_name': 'Rabbit每日爆料',
    'cover': 'https://tvax3.sinaimg.cn/crop.0.0.750.750.180/006758Pyly8fg6x9s2jhtj30ku0ku74m.jpg',
    'imgs': ['https://images.weserv.nl/?url=wx3.sinaimg.cn/orj360/006758Pyly1g1d576y24ij31e02j41h6.jpg', 'https://images.weserv.nl/?url=wx4.sinaimg.cn/orj360/006758Pyly1g1d577v4v4j31e02ogtxc.jpg', 'https://images.weserv.nl/?url=wx4.sinaimg.cn/orj360/006758Pyly1g1d579ldluj30rs27mata.jpg', 'https://images.weserv.nl/?url=wx3.sinaimg.cn/orj360/006758Pyly1g1d57a2nwlj30u0140q8o.jpg', 'https://images.weserv.nl/?url=wx2.sinaimg.cn/orj360/006758Pyly1g1d6bfz6cfj30u015caif.jpg', 'https://images.weserv.nl/?url=wx3.sinaimg.cn/orj360/006758Pyly1g1d6bf9bflj30u00veahe.jpg'],
    'share': 4,
    'comment': 5,
    'thumbs': 5,
    'published_at': '昨天 13:39:33',
    'form': '来自 iponex',
    'content': '感觉焦俊艳真的活的好透彻啊，从小就看见了妈妈这辈子作为家庭妇女的生活是怎样的，所以“我的人生拿来试验一下怎么了”。这句真的酷！！好#羡慕焦俊艳家#的气氛，能大胆说心里话[ok]',
    'active': false
  }, {
    'id': 81047,
    'post_id': '5173375',
    'author_name': '亚洲先生',
    'cover': 'https://tva4.sinaimg.cn/crop.0.0.630.630.180/6f3764f9jw8eeugeg0vdpj20hi0hidgu.jpg',
    'imgs': ['https://images.weserv.nl/?url=tva4.sinaimg.cn/crop.0.0.630.630.180/6f3764f9jw8eeugeg0vdpj20hi0hidgu.jpg', 'https://images.weserv.nl/?url=wx1.sinaimg.cn/orj360/6f3764f9ly1g1cpdxxitrj25n3368e8a.jpg'],
    'share': 27.9,
    'comment': 4.9,
    'thumbs': 9.6,
    'published_at': '昨天 13:33:30',
    'form': '来自 小米7',
    'content': '自救要勇敢，越害怕就越想去挑战，#密室大逃脱# 超级期待！超级期待！超级期待！的我们要来啦。3月30日起每周六中午12点，芒果TV，我们不见不散。',
    'active': false
  }, {
    'id': 81046,
    'post_id': '5173976',
    'author_name': '港台某歌星',
    'cover': 'https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/473fa942ly8fyl5kqvgrfj20u00u00wp.jpg',
    'imgs': ['https://images.weserv.nl/?url=wx4.sinaimg.cn/orj360/473fa942ly1g1dpezgcn5j23ri2icb2f.jpg', 'https://images.weserv.nl/?url=wx3.sinaimg.cn/orj360/473fa942ly1g1dpgii8omj23gg56ou17.jpg'],
    'share': 4,
    'comment': 5.1,
    'thumbs': 1.9,
    'published_at': '昨天 13:33:19',
    'form': '来自 iponexs',
    'content': '開啟了我們一段難忘的旅程！',
    'active': false
  }, {
    'id': 81045,
    'post_id': '5173962',
    'author_name': '影流之主',
    'cover': 'https://tvax4.sinaimg.cn/crop.0.0.1080.1080.180/5c596b7ely8fxwcinv80qj20u00u0wfx.jpg',
    'imgs': ['https://images.weserv.nl/?url=wx2.sinaimg.cn/large/62b2e41fly1g3960nkxrnj20go0godi4.jpg'],
    'share': 1.1,
    'comment': 1.4,
    'thumbs': 4.5,
    'published_at': '昨天 12:49:55',
    'form': '来自 Dlcoud',
    'content': '知心朋友',
    'active': false
  }, {
    'id': 81044,
    'post_id': '5173974',
    'author_name': '大嘴',
    'cover': 'https://tva3.sinaimg.cn/crop.0.0.749.749.180/4b7a8989jw8f7bshuba3vj20ku0ktaaz.jpg',
    'imgs': ['https://images.weserv.nl/?url=wx1.sinaimg.cn/orj360/4b7a8989ly1g1cz8oivtvj22vg25o4qq.jpg', 'https://images.weserv.nl/?url=wx1.sinaimg.cn/orj360/4b7a8989ly1g1cz8oivtvj22vg25o4qq.jpg'],
    'share': 14.9,
    'comment': 21.6,
    'thumbs': 56,
    'published_at': '昨天 12:31:32',
    'form': '',
    'content': '全家最不给我面子的家伙。',
    'active': false
  }, {
    'id': 81043,
    'post_id': '5173907',
    'author_name': '环球日报',
    'cover': 'https://tvax4.sinaimg.cn/crop.0.0.200.200.180/75b1a75fly1fmfz7qvv75j205k05kt8p.jpg',
    'imgs': ['https://images.weserv.nl/?url=wx1.sinaimg.cn/orj360/75b1a75fly1g1dodeqmoij20gr06kt9s.jpg', 'https://images.weserv.nl/?url=wx4.sinaimg.cn/orj360/75b1a75fly1g1dodeu9z4j20j60j6q6o.jpg'],
    'share': 125,
    'comment': 12,
    'thumbs': 300,
    'published_at': '昨天 12:25:05',
    'form': '来自 iponex',
    'content': '-。-，嗯',
    'active': false
  }, {
    'id': 81042,
    'post_id': '5173975',
    'author_name': '趴圈小猪二',
    'cover': 'https://tvax2.sinaimg.cn/crop.0.0.1242.1242.180/005Gyrr9ly8fggm1ramy2j30yi0yidhl.jpg',
    'imgs': ['https://images.weserv.nl/?url=wx1.sinaimg.cn/orj360/005Gyrr9ly1g1domwdqg1j30tp0qojyf.jpg'],
    'share': 2,
    'comment': 3,
    'thumbs': 4,
    'published_at': '昨天 12:24:19',
    'form': '',
    'content': '#泫雅新妆容# 你们觉得她最适合那个妆容？',
    'active': false
  }, {
    'id': 81041,
    'post_id': '5173938',
    'author_name': '东海信箱',
    'cover': 'https://tvax3.sinaimg.cn/crop.0.0.751.751.180/0077ZSQ3ly8fqijlwcnv9j30kv0kvaap.jpg',
    'imgs': ['https://images.weserv.nl/?url=wx2.sinaimg.cn/orj360/0077ZSQ3ly1g1donnenrcj30j6129gnn.jpg', 'https://images.weserv.nl/?url=wx3.sinaimg.cn/orj360/0077ZSQ3ly1g1donmjwjlj30v91umgqa.jpg', 'https://images.weserv.nl/?url=wx4.sinaimg.cn/orj360/0077ZSQ3ly1g1dono0wbaj30tz1e6tau.jpg', 'https://images.weserv.nl/?url=wx3.sinaimg.cn/orj360/0077ZSQ3ly1g1dono6h2jj30qo1a2mz1.jpg', 'https://images.weserv.nl/?url=wx1.sinaimg.cn/orj360/0077ZSQ3ly1g1donmu32fj30rr1ci409.jpg'],
    'share': 14,
    'comment': 1,
    'thumbs': 69,
    'published_at': '昨天 12:24:17',
    'form': '来自 iphone 8 Plus',
    'content': '',
    'active': false
  }, {
    'id': 81040,
    'post_id': '5173972',
    'author_name': '一支上上签',
    'cover': 'https://tvax3.sinaimg.cn/crop.0.0.1002.1002.180/0064QOFcly8fh5drpiavxj30ru0ruwes.jpg',
    'imgs': ['https://images.weserv.nl/?url=wx2.sinaimg.cn/orj360/0064QOFcly1g1cufhxnfrj30j60j6e6h.jpg'],
    'share': 1,
    'comment': 5,
    'thumbs': 2,
    'published_at': '昨天 12:18:31',
    'form': '来自 宇宙',
    'content': '上上签,一定灵',
    'active': false
  }, {
    'id': 81039,
    'post_id': '5173873',
    'author_name': '潮女头',
    'cover': 'https://tvax3.sinaimg.cn/crop.0.0.960.960.180/e0e0b157ly8fjkjy8dc3rj20qo0qojsu.jpg',
    'imgs': ['https://images.weserv.nl/?url=wx2.sinaimg.cn/orj360/e0e0b157gy1g0z9as7dw2j20u01hcn1q.jpg'],
    'share': 4,
    'comment': 5,
    'thumbs': 6,
    'published_at': '昨天 12:14:05',
    'form': '来自 华为 note',
    'content': '美少女战士壁纸，只有美少女才能点赞哦！！！',
    'active': false
  }, {
    'id': 81038,
    'post_id': '5173927',
    'author_name': '全雕',
    'cover': 'https://tvax1.sinaimg.cn/crop.0.0.1080.1080.180/006JLUOwly8g18428qnelj30u00u0jwh.jpg',
    'imgs': ['https://images.weserv.nl/?url=wx1.sinaimg.cn/orj360/a16c0989ly1g19lfg914bj20c80pgjsp.jpg'],
    'share': 0,
    'comment': 0,
    'thumbs': 0,
    'published_at': '昨天 12:07:05',
    'form': '来自 iponex',
    'content': '还是亲生的爸爸比较机智',
    'active': false
  }, {
    'id': 81037,
    'post_id': '5173836',
    'author_name': '有默奇趣排行榜',
    'cover': 'https://tva3.sinaimg.cn/crop.0.0.700.700.180/005z044jjw8f2czv2k4fvj30jg0jgwga.jpg',
    'imgs': ['https://images.weserv.nl/?url=wx4.sinaimg.cn/orj360/6800b571ly1g16orf5fcjj20j605n74v.jpg'],
    'share': 14.9,
    'comment': 0,
    'thumbs': 0,
    'published_at': '昨天 12:00:05',
    'form': '来自 小米8',
    'content': '到底是谁走喽了风声？',
    'active': false
  }, {
    'id': 81036,
    'post_id': '5173832',
    'author_name': '评述员',
    'cover': 'https://tvax4.sinaimg.cn/crop.0.0.996.996.180/6331cc73ly8g03j61e6tfj20ro0ro0v9.jpg',
    'imgs': ['https://images.weserv.nl/?url=wx3.sinaimg.cn/orj360/6331cc73gy1g1djishn98j21900u0wk8.jpg'],
    'share': 3.2,
    'comment': 5.1,
    'thumbs': 12.9,
    'published_at': '昨天 11:54:30',
    'form': '来自 oppo R7',
    'content': 'He will be back',
    'active': false
  }, {
    'id': 81035,
    'post_id': '5173649',
    'author_name': '庸人自扰',
    'cover': 'https://tvax4.sinaimg.cn/crop.0.0.1080.1080.180/4d754b24ly8fzfsy4vqxmj20u00u0wfw.jpg',
    'imgs': ['https://images.weserv.nl/?url=wx2.sinaimg.cn/orj360/4d754b24gy1g1dn898rl5j21zz1i1h7f.jpg'],
    'share': 14.9,
    'comment': 20,
    'thumbs': 50,
    'published_at': '昨天 11:46:24',
    'form': '来自 vivo nex',
    'content': '从前，生活要有心才能拥有，现在，生活要有钱才能拥有，这是我们最大的悲哀。 ',
    'active': false
  }, {
    'id': 81034,
    'post_id': '5173996',
    'author_name': '打天下',
    'cover': 'https://tvax4.sinaimg.cn/crop.0.0.1125.1125.180/806aed8dly8fwb9j9aji1j20v90v9aen.jpg',
    'imgs': ['https://images.weserv.nl/?url=wx2.sinaimg.cn/orj360/e0e0b157gy1g0z9as7dw2j20u01hcn1q.jpg'],
    'share': 16.3,
    'comment': 50.3,
    'thumbs': 120.9,
    'published_at': '昨天 14:11:19',
    'form': '来自 ipone客户端',
    'content': '没有一点点防备也没有什么文案,我就这样出现',
    'active': false
  }]));
}

var _default = {
  getNews: getNews
};
exports["default"] = _default;