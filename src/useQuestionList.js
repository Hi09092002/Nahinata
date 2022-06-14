import { useState } from 'react'
// import q1 from './img/question/220613-1.JPG'
// import q2 from './img/question/220613-2.JPG'
import q3 from './img/question/220613-3.JPG'
import q4 from './img/question/220613-4.JPG'
import q5 from './img/question/220613-5.JPG'
import q6 from './img/question/220613-6.JPG'
import q7 from './img/question/220613-7.JPG'
// import q8 from './img/question/220613-8.JPG'
import q9 from './img/question/220613-9.JPG'
import q10 from './img/question/220613-10.JPG'
import q11 from './img/question/220613-11.JPG'
import q12 from './img/question/220613-12.JPG'
import q13 from './img/question/220613-13.JPG'
import q14 from './img/question/220613-14.JPG'
// import q15 from './img/question/220613-15.JPG'
// import q16 from './img/question/220613-16.JPG'
// import q17 from './img/question/220613-17.JPG'
// import q18 from './img/question/220613-18.JPG'
import q19 from './img/question/220613-19.JPG'
import q20 from './img/question/220613-20.JPG'
// import q21 from './img/question/220613-21.JPG'
import q22 from './img/question/220613-22.JPG'
import q23 from './img/question/220613-23.JPG'
import q24 from './img/question/220613-24.JPG'
// import qq1 from './img/question/220614-1.JPG'
// import qq2 from './img/question/220614-2.JPG'
// import qq3 from './img/question/220614-2.JPG'
// import qq4 from './img/question/220614-2.JPG'
// import qq5 from './img/question/220614-2.JPG'
// import qq6 from './img/question/220614-2.JPG'
// import qq7 from './img/question/220614-2.JPG'

export const useQuestionList = () => {
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
    {
      groupTag: '出席確認など',
      groupContents: [
        {
          detailInfo: '6/13口頭',
          questionImg: [],
          questionSentence: '子宮で、受精卵の受精が起きる場所は？',
          choices: [],
          answerImg: [],
          answer: '卵管膨大部',
          commentary: '',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [],
          questionSentence: '子宮内部で、受精卵の透明帯が取れる場所は？',
          choices: [],
          answerImg: [],
          answer: '子宮体内腔',
          commentary: '透明帯が取れることで、受精卵の着床が可能となる',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [],
          questionSentence: '着床するのはどれ？',
          choices: [
            '胚盤胞',
            '8細胞期胚',
            '桑実胚',
            '原腸胚',
            '受精卵',
            'この中にはない',
          ],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q3],
          questionSentence: '（発生7日の胚）矢印の組織は何か？',
          choices: [
            '胚盤葉上層',
            '羊膜芽細胞',
            '胚盤葉下層',
            '栄養膜細胞層',
            '栄養膜合胞体層',
          ],
          answerImg: [],
          answer: '',
          commentary: '矢印の上の空間が羊膜',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q4],
          questionSentence: '各部位の名称を述べよ',
          choices: [],
          answerImg: [],
          answer:
            '1.一次絨毛　2.栄養膜裂孔　3.付着茎　4.羊膜腔　5.二次卵黄嚢　6.胚外壁側中胚葉　7.胚外体腔（絨毛膜腔）　8.内肺葉　9.外胚葉　10.栄養膜合胞体層　11.栄養膜細胞層',
          commentary: 'まだ中胚葉は存在しない（発生2週目）',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q5],
          questionSentence: '発生13日目の胚の断面で、母体由来の細胞を選べ',
          choices: [],
          answerImg: [],
          answer: 'E?',
          commentary:
            'A.排外中胚葉？　B.栄養膜細胞層　C.栄養膜裂孔（の白血球）　D.栄養膜合胞体層　E.脱落層？',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q6],
          questionSentence: '絨毛の断面図を示す。発生何日目？',
          choices: [],
          answerImg: [],
          answer: '21日目',
          commentary:
            '絨毛Chorionic villiはおよそ21日目で血管を形成し、胚子の血管と連結（絨毛膜動静脈）。三次絨毛は機能的な子宮胎児循環を形成する。',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q7],
          questionSentence:
            '発生13日の胚の断面で、模式図の2に対応する部位はどこか',
          choices: [],
          answerImg: [],
          answer: 'F',
          commentary: '2は栄養膜細胞層で、胚外中胚葉のすぐ外側を覆っている。',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [],
          questionSentence:
            '胞状奇胎hydatidiform moleに関係する記述について正しいものを全て選べ（3つ）',
          choices: [
            '多精子受精は原因になる',
            '完全胞状奇胎では遺伝子量不均衡が起きる',
            '全ての胞状奇胎では、ゲノムのコピー数は父親由来が母親由来の2倍以上である',
            '父親由来ゲノムの1%程度の領域はインプリントされている',
            '胚子組織が子宮内膜に浸潤する',
            'hCGを分泌する',
          ],
          answerImg: [],
          answer:
            '多精子受精は原因になる/全ての胞状奇胎では、ゲノムのコピー数は父親由来が母親由来の2倍以上である/hCGを分泌する',
          commentary:
            '胞状奇胎では、栄養膜が発達して胎盤膜を形成するが、胚子組織がほとんど/まったく存在しない。ゲノムからインプリントされる領域は1%よりもっと少ない。hCGは栄養膜合胞体層から分泌される。',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q9],
          questionSentence: '図の空欄を埋めよ',
          choices: [],
          answerImg: [],
          answer: '1.原始線条　2.原始結節　3.脊索　4.口咽頭膜　5.排泄腔膜',
          commentary: '',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q10],
          questionSentence: '図の空欄を埋めよ',
          choices: [],
          answerImg: [],
          answer:
            '1.外胚葉　2.羊膜　3.卵黄嚢壁　4.口咽頭膜　5.脊索　6.排泄腔膜　7.尿膜　8.原始窩と神経腸管',
          commentary: '',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q11],
          questionSentence: '図の空欄を埋めよ',
          choices: [],
          answerImg: [],
          answer: '1.外胚葉　2.中胚葉　3.内胚葉　4.脊索',
          commentary: '',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q12],
          questionSentence: '発生16日胚の横断面で、矢印は何か',
          choices: [
            '中胚葉',
            '胚盤葉上層',
            '胚盤葉下層',
            '内胚葉',
            '胚外中胚葉',
          ],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q13],
          questionSentence: '発生16日胚の横断面で、矢印の細胞は何か',
          choices: [],
          answerImg: [],
          answer: '中胚葉',
          commentary: '',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q14],
          questionSentence: '23日胚の横断面で、脊索板はどれか',
          choices: [],
          answerImg: [],
          answer: 'D',
          commentary: '',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [],
          questionSentence: 'ES細胞の起源はどれか',
          choices: [
            '栄養膜',
            '内部細胞塊',
            '羊膜',
            '絨毛膜',
            '原始線条',
            'この中にはない',
          ],
          answerImg: [],
          answer: '内部細胞塊',
          commentary: 'ES細胞は胎盤には分化できない。',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [],
          questionSentence: '原始線条は将来何になる？（複数選択可）',
          choices: [
            '中枢神経',
            '骨格筋',
            '脊椎',
            '心臓',
            '生殖細胞',
            'この中にはない',
          ],
          answerImg: [],
          answer: 'この中にはない',
          commentary:
            '原始線条は成長の過程で消える。もし残っていると奇種の原因となる。',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [],
          questionSentence: '上皮と間葉とはそれぞれ何か',
          choices: [],
          answerImg: [],
          answer:
            '上皮細胞は互いに密接に連結し、シート、チューブ、細胞索、腺房、導管等を形成。基本的に、外胚葉か内胚葉に由来。　間葉細胞は互いの連結は無いか緩い。それぞれが個別のユニットとして機能する。基本的に、中胚葉か神経堤に由来。',
          commentary: '上皮細胞Epithelial cells　間葉細胞Mesenchymal cells',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [],
          questionSentence:
            'Which process(es) occurs through epithelial mesenchymal transition?',
          choices: [
            'Implantation',
            'Mesoderm formation',
            'Endoderm formation',
            'Neural crest formation',
            'Blood island formation ',
            'Cancer invasion',
            'None of the above',
          ],
          answerImg: [],
          answer:
            '着床Implantation/中胚葉形成Mesoderm formation/神経堤形成Neural crest formation/ガン浸潤Cancer invasion',
          commentary: '',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q19],
          questionSentence: '4週胚。破線の断面に含まれないのは？（複数回答可）',
          choices: [],
          answerImg: [q20],
          answer: '体節/口咽頭膜/排泄腔膜/卵黄腸管',
          commentary: '',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [],
          questionSentence: '神経堤に由来しないものは？',
          choices: [
            '膵島',
            '消化管の神経細胞',
            'シュワン細胞',
            '交感神経',
            '副腎髄質',
            'この中にはない',
          ],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q22],
          questionSentence: '25日胚の横断面で、矢印からできるものを挙げよ',
          choices: [],
          answerImg: [],
          answer: '子宮',
          commentary: '矢印は中間中胚葉。泌尿器・生殖器に分化する。',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q23],
          questionSentence: '29日胚の横断面で、胚内体腔はどれか？',
          choices: [],
          answerImg: [],
          answer: 'D',
          commentary: 'Dは側板中胚葉で、体腔の上皮などに分化する。',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q24],
          questionSentence: '32日胚の断面で、咽頭弓はどれか？',
          choices: [],
          answerImg: [],
          answer: 'CとD',
          commentary:
            '咽頭弓は鰓弓とも呼ばれ、内部を大動脈が通過する。Aは神経管',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence:
            '背側腸間膜の形成について正しい記述を全て選べ。理由も述べよ。',
          choices: [
            '沿軸中胚葉由来である',
            '横隔膜に寄与する',
            '体壁に寄与する',
            '腸管を腹腔内に吊り下げる',
            '二枚の腹膜が重なって形成される',
            'この中にはない',
          ],
          answerImg: [],
          answer:
            '横隔膜に寄与する/腸管を腹腔内に吊り下げる/二枚の腹膜が重なって形成される',
          commentary:
            '体腔は側板中胚葉由来。背側腸間膜は体壁と連続しているが、体壁に寄与しているとまでは言えない。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence:
            '胚内体腔の形成について正しい記述を全て選べ（２つ）。理由も述べよ',
          choices: [
            '羊膜腔に交通する',
            '絨毛膜腔に交通する',
            '卵黄嚢に交通する',
            '外胚葉性の上皮に取り囲まれる',
            '中胚葉性の上皮に取り囲まれる',
            'この中にはない',
          ],
          answerImg: [],
          answer: '絨毛膜腔に交通する/中胚葉性の上皮に取り囲まれる',
          commentary:
            '胚の外側に広がる絨毛膜腔の一部が側板中胚葉に取り囲まれて体腔が形成される。',
        },
        {
          detailInfo: '6/14確認問題',
          // questionImg: [qq1],
          questionSentence:
            '発生19日目の胚の断面図で、将来胸腔になるのはどこ？',
          choices: [],
          answerImg: [],
          answer: '2（側板中胚葉）',
          commentary:
            '4は卵黄嚢。1は羊膜。2は側板中胚葉で、ここにできてくる空間が体腔のもとになる。',
        },
        {
          detailInfo: '6/14確認問題',
          // questionImg: [qq2],
          questionSentence:
            '28日胚の横断面で、将来腹腔になるのは？（複数選択可）',
          choices: [],
          answerImg: [],
          answer: 'CとD',
          commentary:
            'Bが神経管。C＆Dが側板中胚葉。間隙が形成され始めている。Gが原始腸管',
        },
        {
          detailInfo: '6/14確認問題',
          // questionImg: [qq3],
          questionSentence: '25日胚の横断面で、将来の胸腔はどれか',
          choices: [],
          answerImg: [],
          answer: 'D',
          commentary:
            'Dが側板中胚葉で、胚内体腔。下側が臓側中胚葉、上側が壁側中胚葉。Aが神経溝、Eの膨らみは原始心筒（心臓）。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence: '横中隔について正しい記述を選べ',
          choices: [
            '発生5週から形成が始まる',
            'はじめは心臓よりも前方に形成される',
            '臓側中胚葉由来である',
            '横隔膜の一部を形成する',
            '肝臓細胞索を形成する',
            'この中にはない',
          ],
          answerImg: [],
          answer:
            'はじめは心臓よりも前方に形成される/臓側中胚葉由来である/横隔膜の一部を形成する？',
          commentary:
            '肝臓細胞索≒肝臓の実質。肝臓の実質は内胚葉の前腸に由来する。',
        },
        {
          detailInfo: '6/14確認問題',
          // questionImg: [qq4],
          questionSentence: '25日胚の横断面で、影をつけた部分は何か？',
          choices: [],
          answerImg: [],
          answer: '腹腔？',
          commentary:
            '胸膜腔は心膜腔と隔たれて初めて定義される。卵黄嚢は影をつけた部分のさらに下側の部分。心膜腔がその間に筒状に見られる。',
        },
        {
          detailInfo: '6/14確認問題',
          // questionImg: [qq5],
          questionSentence: '41日胚の横断面で、矢印の部分は何か？',
          choices: [],
          answerImg: [],
          answer: '横隔神経',
          commentary:
            '最上部に見えているのは神経管。その両側が知覚神経、両側に見えて濃く染まっているのが肝臓（を包む腹腔）。最前部の2つの円が心臓。その上が心房のようなもの（血管？）、そのさらに上が肺芽（胸腔）。心膜腔と胸腔を隔てている中隔が胸中隔。知覚神経と同じく濃く染まっているので矢印部分は神経だと推測できる。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence:
            '胎盤について、正しくない記述を全て上げ、理由を発生機序に関連付けて説明せよ',
          choices: [
            '胎盤関門は、最終的には栄養膜合胞体層、栄養膜細胞層、胎児血管内皮、絨毛の結合組織からなる',
            '胎盤関門は免疫グロブリンを通さない',
            '絨毛膜版には胎児側の血管が通っている',
            '絨毛膜腔には胎児側の血管が循環する',
            'すべて正しい仮設である。',
          ],
          answerImg: [],
          answer:
            '胎盤関門は、最終的には栄養膜合胞体層、栄養膜細胞層、胎児血管内皮、絨毛の結合組織からなる/胎盤関門は免疫グロブリンを通さない/絨毛膜腔には胎児側の血管が循環する',
          commentary:
            '胎盤関門は最終的には栄養膜合胞体層・胎児血管内皮の2層となり、結構色々なものを通す。母体から最も分子量の小さいIMgが胎盤を通して胎児に供給され、それが半年程度残るため乳児は風邪を引かない。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence: '妊娠5か月のヒト組織で、矢印の細胞は何か？',
          choices: [
            '赤血球（母体）',
            '赤血球（胎児）',
            'ラングハンス細胞',
            'ランゲルハンス島',
            '合胞体結節',
          ],
          answerImg: [],
          answer: '赤血球（胎児）',
          commentary:
            '映っている組織は胎盤絨毛で、絨毛外側の濃くなっている薄い細胞の層が栄養膜合胞体層（境目が明瞭ではない/hCG産生）で、その内側が栄養膜細胞層（ラングハンス細胞）で、そのさらに内側が結合組織。胎児の赤血球は有核なので本当は核が染まる。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence:
            '左右の模式図内（左は発生5週）で、構造1~7の由来をA~Kから選べ。',
          choices: [],
          answerImg: [],
          answer: 'C→1絨毛膜板,K→2羊膜,E→3羊膜腔,I→4胚子,B→6臍帯,D→7卵黄嚢',
          commentary:
            '卵黄嚢は腸ループで生理的臍帯ヘルニアを起こす時期がある。絨毛膜と羊膜は融合して羊膜絨毛膜になっていく。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence:
            '発生9日胚で、矢印の部分は将来右の模式図のどこになるか？',
          choices: [],
          answerImg: [],
          answer: 'C',
          commentary:
            '中央の球が2層性胚盤で、その上側が円柱状の外胚葉で、胚盤上側の空間が羊膜。また、画面上側が子宮内膜（血管などが見える）。その間の濃い部分が栄養膜で、矢印の細胞は細胞境界が明瞭で、栄養膜細胞層と推定できる。模式図で栄養膜細胞層はC。Dは栄養膜合胞体層で、Eは血管。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence: '妊娠期間中の計測値。矢印は何？',
          choices: [
            '羊水の重量',
            '胎児の体重',
            '胎盤の重量',
            '胎児の頭殿長',
            '母体の重量',
            'この中にはない',
          ],
          answerImg: [],
          answer: '胎児の頭殿長',
          commentary: '妊娠8週だと数センチ。胎児の体重は途中から伸びてくる。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence:
            '一卵性双生児の模式図で、発生段階のいつ双生児となったと考えられるか？理由とともに述べよ',
          choices: [
            '1細胞期',
            '2細胞期',
            '桑実胚',
            '胚盤胞',
            '原腸胚',
            'この中にはない',
          ],
          answerImg: [],
          answer: 'この中にはない',
          commentary:
            '胎盤・絨毛膜・羊膜が共通。原始腸管は2つもっている。これは比較的遅い段階（胚盤葉上層が作られた後/原腸形成の前）で双生児となった場合にみられる。原腸形成後では一卵性双生児は発生しない。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence:
            '母親がD抗原を持たず、胎児がD抗原を持つ場ときに誘発される不適合と、その予防法を解説せよ',
          choices: [],
          answerImg: [],
          answer: '',
          commentary:
            '胎児赤芽球症。抗Dグロブリン製剤を注射することで母体側から排除する必要がある。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence: '先天異常について、正しい記述は？（複数選択可）',
          choices: [
            '大異常は新生児の3～5%に生ずる',
            '小異常は新生児の3～5%に生ずる',
            '小異常の数と大異常の発生率には有意な相関がない',
            '先天異常の原因は、概ね遺伝性疾患か環境要因によっており、原因が同定されていることが多い',
            '予防可能な先天異常が多い',
          ],
          answerImg: [],
          answer: '大異常は新生児の3～5%に生ずる/予防可能な先天異常が多い',
          commentary:
            '小異常の数と大異常の数には相関がある。小異常が複数みられると、大異常をもっている確率が格段に高まる。特に耳介に異常が見られると危ない。耳介は見た目よりも複雑に（神経堤など）作られているため。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence:
            '症候群Syndromeと連合Associationの相違は何か？（１つ選択）',
          choices: [
            '症候群はいくつかの異常の合併である点で異なる',
            '連合は合併する異常の原因が共通している点で異なる',
            '症候群は診断がつく点で異なる',
            '連合は複数の異常が偶然より高い確率で併発する点で異なる',
            '症候群は遺伝的要因による点で異なる',
            'この中にはない',
          ],
          answerImg: [],
          answer: '症候群は診断がつく点で異なる',
          commentary:
            '両者複数の症状が高い確率で合併する点で共通。症候群は根本的な原因がハッキリしているため、診断がつく。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence: 'SNPについて正しい記述は？',
          choices: [
            '個人差は1%である',
            '常染色体にのみ存在する',
            '人種差は発見されていない',
            '最も頻度の高いゲノムの多型である',
            'この中にはない',
          ],
          answerImg: [],
          answer: '最も頻度の高いゲノムの多型である',
          commentary:
            'SNP=一塩基多型Single Nucleotide Polymorphism。SNPは性染色体にも存在し、ゲノムの中に0.1%存在する。人種差に至る変異は当然存在するが、野生動物の中では結構少ない',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence: '父親の年齢に最も強く依存する先天異常はどれか？',
          choices: [
            'クラインフェルター症候群',
            'ダウン症候群',
            'アペール症候群',
            '猫鳴き症候群',
            '胎児性アルコール症候群',
          ],
          answerImg: [],
          answer: 'アペール症候群',
          commentary:
            'ダウン症候群は21番染色体のトリソミーで基本的に母体年齢に依存する。クラインフェルター症候群はX染色体数の異常。アペール症候群は精子幹細胞の異常で、これが該当する。猫鳴き症候群は5番染色体の欠損で、父親年齢には依存しない。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence: '先天疾患の原因になるものはどれか',
          choices: [
            'ライノウイルス',
            'コロナウイルス',
            'インフルエンザ',
            '風疹',
            '麻疹',
          ],
          answerImg: [],
          answer: '風疹',
          commentary:
            '麻疹は胎盤関門を通過する。風疹は緑内障などの目や心臓の先天異常の原因になる。インフルエンザは流産の原因になることはある。麻疹もワクチン接種推奨',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence: '先天疾患の原因になるものはどれか',
          choices: [
            'レチノイン酸',
            '葉酸',
            'バルプロ酸',
            'クエン酸',
            '酢酸',
            'この中にはない',
          ],
          answerImg: [],
          answer: '風疹',
          commentary:
            'レチノイン酸は体節など分節構造を司る重要なシグナル物質である。パルプロ酸も同様。葉酸は足りないことはあっても取りすぎることはない。クエン酸・酢酸は身近に豊富にある。',
        },
      ],
    },
  ])
  const showQuestionList = () => {
    return questionList
  }
  return {
    showQuestionList,
  }
}
