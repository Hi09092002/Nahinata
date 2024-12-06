import { useState } from 'react'

// import q1 from './img/question/220613-1.JPG'
import yousan1 from './img/question/yousan1.png'
import vitamin2 from './img/answer/vitamin2.png'
import vitamin1 from './img/answer/vitamin1.png'
import LDLVLDL from './img/answer/LDLVLDL.png'
import jaundice from './img/answer/jaundice.png'
import enzyme from './img/answer/enzyme.png'
import endocytosisLDL from './img/answer/endocytosisLDL.png'
import COVID19 from './img/answer/COVID19.gif'
import coriCycle from './img/answer/coriCycle.png'
import aminoPool from './img/answer/aminoPool.png'
import F1toF5 from './img/answer/F1toF5.png'
import enzymeReport1 from './img/answer/enzymeReport1.png'
import colloid from './img/answer/colloid.png'
import BMTD from './img/answer/BMTD.png'
import EnzymeActivity from './img/answer/EnzymeActivity.jpg'
import NSAIDs from './img/answer/NSAIDs.jpg'
import lipidMediator from './img/answer/lipidMediator.jpg'
import chromatographyResult from './img/answer/chromatographyResult.jpg'
import plate96well from './img/answer/plate96well.png'
import cubetAbsorbance from './img/answer/cubetAbsorbance.png'
import blankGraph from './img/answer/blankGraph.png'
import baseAbsorbance from './img/answer/baseAbsorbance.png'
import diabetesMellitus from './img/answer/diabetesMellitus.png'
import NEFA from './img/answer/NEFA.png'
import chyloMicron from './img/answer/chyloMicron.png'
import chromatography from './img/answer/chromatography.png'
import cholesterol from './img/answer/cholesterol.png'
import beforeDiet from './img/answer/beforeDiet.png'
import afterDiet from './img/answer/afterDiet.png'
import restrictionEnzyme from './img/answer/restrictionEnzyme.png'
import microRNA from './img/answer/microRNA.png'
import kidneyTissue from './img/answer/kidneyTissue.jpg'
import genomeEditting from './img/answer/genomeEditting.webp'
import geneTherapy from './img/answer/geneTherapy.png'
import geneModifyVector from './img/answer/geneModifyVector.png'
import taqman from './img/answer/taqman.png'
import SNP from './img/answer/SNP.png'
import sequencing from './img/answer/sequencing.png'
import mtDNA from './img/answer/mtDNA.jpeg'
import HIV from './img/answer/HIV.jpg'
import alcohol from './img/answer/alcohol.png'
import VATPase from './img/answer/VATPase.png'
import SAM from './img/answer/SAM.png'
import ammonia from './img/answer/ammonia.png'
import RTPCR from './img/answer/RTPCR.png'
import Xgal from './img/answer/Xgal.png'
import operon from './img/answer/operon.png'
import lacZ from './img/answer/lacZ.png'
import introducedAST1 from './img/answer/introducedAST1.png'
import plasmid from './img/answer/plasmid.png'
import metabolism from './img/answer/metabolism.png'
import uncouplingProtein from './img/answer/uncouplingProtein.png'
import glucokinase from './img/answer/glucokinase.png'
import cytoplasmAcetylCoA from './img/answer/cytoplasmAcetylCoA.png'
import SDSMicelle from './img/answer/SDSMicelle.png'
import ribonucleotide from './img/answer/ribonucleotide.png'
import oligoDTprimer from './img/answer/oligoDTprimer.png'
import electrophoresisDNA from './img/answer/electrophoresisDNA.png'
import DNAsynthesize from './img/answer/DNAsynthesize.png'
import coagulation from './img/answer/coagulation.png'
import S15Gene from './img/question/S15Gene.png'
import insulinGene from './img/question/insulinGene.png'
import biochemistry_2020_1_1 from './img/answer/biochemistry_2020_1_1.jpg'
import biochemistry_2020_1_2 from './img/answer/biochemistry_2020_1_2.jpg'
import biochemistry_2020_1_3 from './img/answer/biochemistry_2020_1_3.jpg'
import biochemistry_2020_1_4 from './img/answer/biochemistry_2020_1_4.jpg'
import biochemistry_2020_1_5 from './img/answer/biochemistry_2020_1_5.jpg'
import biochemistry_2020_1_6 from './img/answer/biochemistry_2020_1_6.jpg'
import biochemistry_2020_2_1 from './img/answer/biochemistry_2020_2_1.jpg'
import biochemistry_2020_2_2 from './img/answer/biochemistry_2020_2_2.jpg'
import biochemistry_2020_2_3 from './img/answer/biochemistry_2020_2_3.jpg'
import biochemistry_2020_2_4 from './img/answer/biochemistry_2020_2_4.jpg'
import biochemistry_2020_2_5 from './img/answer/biochemistry_2020_2_5.jpg'
import biochemistry_2020_4_1 from './img/answer/biochemistry_2020_4_1.jpg'
import biochemistry_2020_4_2 from './img/answer/biochemistry_2020_4_2.jpg'
import biochemistry_2020_5_1 from './img/answer/biochemistry_2020_5_1.jpg'
import biochemistry_2020_5_2 from './img/answer/biochemistry_2020_5_2.jpg'
import biochemistry2021_7_4 from './img/answer/biochemistry2021_7_4.JPG'
import biochemistry2021_7_3 from './img/answer/biochemistry2021_7_3.JPG'
import biochemistry2021_7_2 from './img/answer/biochemistry2021_7_2.JPG'
import biochemistry2021_7_1 from './img/answer/biochemistry2021_7_1.JPG'
import biochemistry2021_6_3 from './img/answer/biochemistry2021_6_3.JPG'
import biochemistry2021_6_2 from './img/answer/biochemistry2021_6_2.JPG'
import biochemistry2021_6_1 from './img/answer/biochemistry2021_6_1.JPG'
import biochemistry2021_5_3 from './img/answer/biochemistry2021_5_3.JPG'
import biochemistry2021_5_2 from './img/answer/biochemistry2021_5_2.JPG'
import biochemistry2021_5_1 from './img/answer/biochemistry2021_5_1.JPG'
import biochemistry2021_4_3 from './img/answer/biochemistry2021_4_3.JPG'
import biochemistry2021_4_2 from './img/answer/biochemistry2021_4_2.JPG'
import biochemistry2021_4_1 from './img/answer/biochemistry2021_4_1.JPG'
import biochemistry2021_3 from './img/answer/biochemistry2021_3.JPG'
import biochemistry2021_2 from './img/answer/biochemistry2021_2.JPG'
import biochemistry2021_1_3 from './img/answer/biochemistry2021_1_3.JPG'
import biochemistry2021_1_2 from './img/answer/biochemistry2021_1_2.JPG'
import biochemistry2021_1_1 from './img/answer/biochemistry2021_1_1.JPG'
import biochemistry2020_3_question from './img/answer/biochemistry2020_3_question.jpg'
import biochemistry2020_3_answer from './img/answer/biochemistry2020_3_answer.jpg'
import biochemistry2019_8 from './img/answer/biochemistry2019_8.jpg'
import biochemistry2019_6_ans from './img/answer/biochemistry2019_6_ans.jpg'
import biochemistry2019_5 from './img/answer/biochemistry2019_5.jpg'
import biochemistry2019_4_2 from './img/answer/biochemistry2019_4_2.jpg'
import biochemistry2019_4_1 from './img/answer/biochemistry2019_4_1.jpg'
import biochemistry2019_3_3 from './img/answer/biochemistry2019_3_3.jpg'
import biochemistry2019_3_2 from './img/answer/biochemistry2019_3_2.jpg'
import biochemistry2019_3_1 from './img/answer/biochemistry2019_3_1.jpg'
import biochemistry2019_2_3 from './img/answer/biochemistry2019_2_3.jpg'
import biochemistry2019_2_2 from './img/answer/biochemistry2019_2_2.jpg'
import biochemistry2019_2_1 from './img/answer/biochemistry2019_2_1.jpg'
import biochemistry2019_1_2 from './img/answer/biochemistry2019_1_2.jpg'
import biochemistry2019_1_1 from './img/answer/biochemistry2019_1_1.jpg'
import biochemistry2018_7 from './img/answer/biochemistry2018_7.jpg'
import biochemistry2018_4_4 from './img/answer/biochemistry2018_4_4.jpg'
import biochemistry2018_4_1 from './img/answer/biochemistry2018_4_1.jpg'
import biochemistry2018_3 from './img/answer/biochemistry2018_3.JPG'
import biochemistry2018_2 from './img/answer/biochemistry2018_2.jpg'
import biochemistry2017_5_3 from './img/answer/biochemistry2017_5_3.JPG'
import biochemistry2017_5_2 from './img/answer/biochemistry2017_5_2.JPG'
import biochemistry2017_5_1 from './img/answer/biochemistry2017_5_1.JPG'
import biochemistry2016_5_3 from './img/answer/biochemistry2016_5_3.JPG'
import biochemistry2016_5_2 from './img/answer/biochemistry2016_5_2.JPG'
import biochemistry2016_5_1 from './img/answer/biochemistry2016_5_1.JPG'
import biochemistry2016_3_3 from './img/answer/biochemistry2016_3_3.jpg'
import biochemistry2016_3_2 from './img/answer/biochemistry2016_3_2.jpg'
import biochemistry2016_3_1 from './img/answer/biochemistry2016_3_1.jpg'
import biochemistry2016_2 from './img/answer/biochemistry2016_2.jpg'
import biochemistry2018_5 from './img/answer/biochemistry2018_5.png'
import biochemistry2018_4_3 from './img/answer/biochemistry2018_4_3.png'
import biochemistry2018_4_2 from './img/answer/biochemistry2018_4_2.png'
import biochemistry2018_1 from './img/answer/biochemistry2018_1.png'

import corePromoter from './img/answer/corePromoter.png'
import promoter from './img/answer/promotor.png'
import synthesizeCatecholamine from './img/answer/synthesizeCatecholamine.png'
import donorAcceptorSite from './img/answer/donorAcceptorSite.png'
import flankingRegion from './img/answer/flankingRegion.png'
import splicing from './img/answer/splicing.png'
import removeIntron from './img/answer/removeIntron.png'
import tRNA from './img/answer/tRNA.png'
import snRNA from './img/answer/snRNA.png'
import promotor from './img/answer/promotor.png'
import insulinLikePeptides from './img/answer/insulinLikePeptides.png'
import geneDuplication from './img/answer/geneDuplication.png'
import DNArepair from './img/answer/DNArepair.png'
import standardFreeEnergy from './img/answer/standardFreeEnergy.png'
import SFEquestion from './img/question/SFEquestion.png'
import SFEquestion2 from './img/question/SFEquestion2.png'

export const useQuestionList = () => {
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
    {
      groupTag: '2024期末',
      groupContents: [
        {
          detailInfo: '1',
          questionImg: [],
          questionSentence:
            'コレステロール生合成における律速酵素の名称を答えなさい。また、その主な調節機構3つについて説明しなさい。',
          choices: [],
          answerImg: [],
          answer:
            '律速酵素はHMG CoAレダクターゼで、その発現、活性調節が主なコレステロール合成の調節部位である。調節機構の1つ目は転写因子SREBP-2 による転写を介した発現調節で、コレステロール低下にともない、アップレギュレートされ、豊富なときはアップレギュレートされる。2つ目はHMG CoAレダクターゼの分解による調節で、コレステロール濃度が高い際にはHMG CoAレダクターゼはユビキチン・プロテアソーム系で分解される。3つ目はAMPK、プロテインフォスファターゼによるHMG CoAレダクターゼのリン酸化/脱リン酸化を介した活性制御である。インシュリンによってHMG CoA レダクターゼは脱リン酸化され活性化される一方、グルカゴン、アドレナリンやコレステロール上昇によってHMG CoAレダクターゼはリン酸化され不活性化される。',
          commentary: '',
        },
        {
          detailInfo: '2',
          questionImg: [],
          questionSentence:
            '真核生物のほとんどの体細胞では分裂のたびにテロメアが短くなるが、それはなぜか説明しなさい。また、テロメアが極端に短くなり、細胞が不可逆的に分裂停止する現象を何と呼ぶか答えなさい。',
          choices: [],
          answerImg: [],
          answer:
            'ラギング鎖の5’末端に付加されたRNAプライマーが除去されたのちそのギャップをDNAで埋めることができないため(or 特定の細胞以外はテロメラーゼの活性がないため分裂にともなってテロメアは短くなる)。テロメア短縮などによる細胞の不可逆的な分裂停止現象は細胞老化と呼ばれている。',
          commentary: '',
        },
        {
          detailInfo: '3',
          questionImg: [],
          questionSentence:
            '原核生物においてDNA 複製に関わる以下の酵素についてリーディング鎖の合成で働く順番に並べ替えなさい: A. Ligase, B. Polymerase I(3’→5’ exonuclease activity), C. Polymerase I (5’→3’ exonuclease activity), D. Polymerase I (5’→3’ polymerase activity), E. Polymerase III, F. DNA helicase, G. Primase。',
          choices: [],
          answerImg: [],
          answer: 'FGECDBA',
          commentary: '',
        },
        {
          detailInfo: '4',
          questionImg: [],
          questionSentence:
            'DNAのクローニング等に使用されるベクターの特徴を3つ述べよ。',
          choices: [],
          answerImg: [],
          answer:
            '1. 宿主細胞内で自律的に複製できる。 2. 目的とするDNA断片を挿入するための制限酵素サイトがある。 3. ベクターを選別できる薬剤耐性遺伝子等をもつ。',
          commentary: '',
        },
        {
          detailInfo: '5',
          questionImg: [],
          questionSentence:
            '制限酵素断片長多型(RFLP: Restriction Fragment Length Polymorphism)を生じるDNA 変化を2つ挙げよ。',
          choices: [],
          answerImg: [],
          answer: '一塩基多型(SNP)あるいは一塩基置換 ・縦列反復配列(タンデムリピート)',
          commentary: '',
        },
        {
          detailInfo: '6',
          questionImg: [],
          questionSentence:
            'フェニルケトン尿症（PKU）について次の点を簡潔に説明せよ。1)PKU の主要な原因を２つ記述せよ 2)PKU で生じる代謝異常およびPKUの治療法',
          choices: [],
          answerImg: [],
          answer:
            '1)フェニルアラニンヒドロキシラーゼ（PAH、フェニルケトンシンテターゼなども可）の欠損・異常 ・テトラヒドロビオプテリン（BH4、PAHの補酵素なども可）の代謝異常 2)フェニルアラニンおよびその代謝産物であるフェニルピルビン酸、フェニル乳酸、フェニル酢酸が蓄積する（また、それらが尿として排出されるため尿がカビ臭となる）。加えて、フェニルアラニンから合成されるチロシンが不足する。古典的 PKU にはフェニルアラニンを除去した食事にチロシンを補充する食事療法が有効とされる。（フェニルアラニン除去のみの回答は減点）。テトラヒドロビオプテリン代謝異常が原因の場合、テトラヒドロビオプテリンを投与する事でも治療可能 （どちらか一方の治療法が記述されていれば良い。但し、病因と対応していなければならない）。',
          commentary: '',
        },
        {
          detailInfo: '7',
          questionImg: [],
          questionSentence:
            '薬物が体内に取り込まれた時に肝臓のヘム生合成が亢進する。その機序（メカニズム）を説明せよ。',
          choices: [],
          answerImg: [],
          answer:
            'ヘムは薬物の無毒化に関わるタンパク質シトクロムP450（P450、CYPタンパク質も可）の合成にも利用される。よって、薬物投与時にはシトクロム P450 の合成にヘムが消費され、ヘムの減少によりALAS（δアミノレブリン酸合成酵素、ALA合成酵素なども可）が活性化する事で肝臓のヘム合成が亢進する。',
          commentary: '',
        },
        {
          detailInfo: '8',
          questionImg: [],
          questionSentence:
            '赤血球中のヘモグロビン分解・排出に関して、肝臓で生じる反応を説明せよ。',
          choices: [],
          answerImg: [],
          answer:
            '赤血球は肝臓（や脾臓）の単核貪食細胞系細胞（マクロファージ）によって貪食され、ヘモグロビンはヘムとグロビンに分解される。ヘムはヘムオキシゲナーゼにより開環してビリベルジンとなり、さらに還元されて（間接）ビリルビンが生成される。（脾臓のビリルビリンは血中でアルブミンと結合した状態で肝臓に輸送され）、（間接）ビリルビンは血漿に難溶であるためビリルビングルクロニルトランスフェラーゼによりグルクロン酸と結合し、抱合（直接）ビリルビンに変換される。抱合（直接）ビリルビンは胆汁に能動輸送されて分泌され、十二指腸に排出される。 注意：グロビンはタンパク質であり、タンパク質分解酵素によりアミノ酸に分解される。グロビンの分解でビリルビンが生成されるという間違った解答が多く見られたので、注意しておく事。',
          commentary: '',
        },
        {
          detailInfo: '9',
          questionImg: [],
          questionSentence:
            '脂肪組織において貯蔵脂肪の分解が亢進している時の代謝を説明した以下の文章のうち、誤ったものを１つ選んで正しくなおしなさい。\n(1) 貯蔵脂肪を分解するリパーゼはグルカゴンやアドレナリンの作用により活性化される。\n(2) このとき血中の脂肪酸は増加している。\n(3) 筋肉に取り込まれた脂肪酸は酸化され、すべてアセチルCoAになる。\n(4) 肝臓では脂肪酸酸化で生じたアセチルCoAはTCA回路でオキサロ酢酸にまで代謝され糖新生を促進する。\n(5) 肝臓では脂肪酸酸化の最終段階で生じたアセトアセチルCoAはケトン体の材料になる。',
          choices: [],
          answerImg: [],
          answer:
            '誤っているのは(4)。 アセチルCoAはTCA回路で酸化され二酸化炭素となり新たにオキサロ酢酸を生じているのではない。アセチルCoAはピルビン酸→オキサロ酢酸の反応を触媒するピルビン酸カルボキシラーゼを活性化しオキサロ酢酸の産生を促進することで糖新生を促進する。',
          commentary: '',
        },
        {
          detailInfo: '10',
          questionImg: [yousan1],
          questionSentence:
            'ジヒドロ葉酸レダクターゼ（DHFR）はジヒドロ葉酸をテトラヒドロ葉酸（THF）へ還元する反応を触媒する酵素である。抗がん薬として用いられるメトトレキサート（MTX）はDHFR の競合阻害剤である。\n（１）次のグラフの実線で示すプロットはMTX非存在下でのDHFRのジヒドロ葉酸に対するLineweaver-Burk plot である。MTX存在下では点線a～dのうちどのプロットとなるか，一つ選びなさい。また，その理由を，MTXの阻害様式及び酵素反応速度論のパラメーター（Km，Vmax）の変化に言及し説明しなさい。\n（２）DHFR阻害剤が抗がん作用を発揮するのはなぜか。THFの生理作用に言及し説明しなさい。',
          choices: [],
          answerImg: [],
          answer:
            '（１）MTX 存在下でのプロットはaのパターンとなる。MTX は DHFR の競合阻害剤である。競合阻害剤は酵素の活性部位に結合するため，競合阻害剤存在下では見かけの Kmが増大する。しかし，阻害剤に対し基質が十分に過剰に存在する場合，その阻害効果は減弱するため，Vmaxは変化しない。したがって，MTX存在下ではKmが増大しVmaxは変化しないaのプロットパターンを示すこととなる。\n（２）DHFRの反応により生成されるTHFは補酵素として一炭素単位を運搬する機能をもつ。特に，THF はプリン塩基及びチミジル酸の生合成に必要である。がん細胞は正常細胞に比べ分裂・増殖が速いため，DNA合成がさかんであり，THF要求性が高い。したがって，MTXなどのDHFRの競合阻害剤はがん細胞により強く作用し DNA 合成障害・細胞分裂障害を引き起こすことにより抗がん作用を発揮する。',
          commentary: '',
        },
        {
          detailInfo: '11',
          questionImg: [],
          questionSentence:
            'オルニチントランスカルバミラーゼ（OTC）欠損症で尿中にオロト酸がみられる理由について述べなさい。',
          choices: [],
          answerImg: [],
          answer:
            'OTC 欠損によりミトコンドリア内で分解されなくなったカルバモイルリン酸は細胞質で過剰となる。その結果、細胞質でピリミジンヌクレオチド代謝が促進され、オロト酸の過剰生産を引き起こす。',
          commentary: '',
        },
        {
          detailInfo: '12',
          questionImg: [],
          questionSentence:
            'Lesch-Nyhan （レッシュ・ナイハン）症候群の原因と症状について述べなさい。',
          choices: [],
          answerImg: [],
          answer:
            '原因 プリンのサルベージ経路で活躍する酵素であるヒポキサンチン-グアニンホスホリボシルトランスフェラーゼ (HGPRT)の欠損によって起こる。この酵素欠損の結果、ホスホリボシルピロリン酸(PRPP)が過剰となり、IMPやGMPが減少する。PRPPはプリンヌクレオチド新規合成経路のグルタミンホスリボシルピロリン酸アミドトランスフェラーゼの基質であり、IMP と GMPはその阻害因子であるため、プリンの新規合成が増加する。再利用は減少しているため、最終的にプリン分解が増加し、尿酸を大量に生産する。\n症状 高尿酸血症（による痛風や腎不全）や自傷行為など特徴的な異常行動を示す神経障害がみられる。',
          commentary: '',
        },
        {
          detailInfo: '13',
          questionImg: [],
          questionSentence:
            'mRNAの成熟化機構について原核生物と真核生物の違いに着目し説明しなさい。',
          choices: [],
          answerImg: [],
          answer:
            '原核生物と異なり真核生物には核が存在する。また多数の非翻訳領域（イントロン）を有する。そのため、mRNAは成熟化したのちに、核から細胞質に輸送される。下記がmRNAの具体的な成熟化である。\n１：キャップ構造の形成 mRNA の５\'末端に、メチル機を持つグアニンを付加する機構。この付加により翻訳の開始が可能となり、mRNAの安定性が向上する。\n２：ポリアデニル化 mRNA の3\'末端に数百ヌクレオチドのアデニンを付加する機構。ポリアデニル化によりmRNA の安定性が向上し、核外への輸送が促進される。\n３：RNAのスプライシング（イントロンの除去） スプライソソームによりmRNAから非翻訳領域であるイントロンを取り除き、翻訳領域であるエキソンを繋ぎ合わせる機構。',
          commentary: '',
        },
        {
          detailInfo: '14',
          questionImg: [],
          questionSentence:
            '翻訳を担うリボソームの構成及び機能についてA～Dの部分を埋めよ。\nリボソームはタンパク質と（A）からなる巨大複合体であり、小サブユニットと大サブユニットで構成される。小サブユニットは（B）に結合し、（C）サブユニットの（D）活性により、アミノ酸同士がペプチド結合により繋がっていく。',
          choices: [],
          answerImg: [],
          answer:
            'A: rRNA, B: mRNA, C: 大, D: ペプチジルトランスフェラーゼ',
          commentary: '',
        },
      ],
    },    
    {
      groupTag: '2023本試',
      groupContents: [
        {
          detailInfo: '1',
          questionImg: [],
          questionSentence:
            'タンパク質の変性とは何か、説明しなさい。',
          choices: [],
          answerImg: [],
          answer:
            'タンパク質の変性とは、熱、pHの変化、化学物質などによってタンパク質の一次構造は変化しないが、タンパク質の立体構造が変化することで、機能を失う。また、これは多くの場合、不可逆的である。',
          commentary:
            '酵素の大半はタンパク質。酵素の活性と温度の関係について述べなさい（2021期末）、酵素の温度変化による性質変化について述べよ（2024中間）はこのコンフォメーション変化によ失活が関係。（※2023の解答は総代の津本さん作成のシケプリから転載させていただいたもの＋参考程度に追加した補足です）',
        },
        {
          detailInfo: '2',
          questionImg: [],
          questionSentence:
            'Anfinsenの法則とは何か、リボヌクレアーゼの実験の内容を含め、簡潔に説明しなさい',
          choices: [],
          answerImg: [],
          answer:
            'Anfinsen の法則とは、折りたたみはアミノ酸配列情報に基づいて自発的に起こるというものである。これは変性したリボヌクレアーゼが、透析によって変性剤を取り除くと元の立体構造に自発的に折りたたまれたことで結論づけられた。',
          commentary: '細胞内ではタンパク質同士が凝集体を形成するので成り立たない。関連ワード：シャペロン',
        },
        {
          detailInfo: '3',
          questionImg: [],
          questionSentence:
            ' ミトコンドリアマトリックスの NADH とコハク酸から供与される電子により生成されるATPの分子数が異なる理由を簡潔に説明しなさい。',
          choices: [],
          answerImg: [],
          answer:
            'ミトコンドリアのマトリックスでは、ピルビン酸からアセチルCoAになる反応でピルビン酸1分子あたりNADHが1分子産生され、TCA回路ではピルビン酸1分子あたりNADHが3分子産生される。それに対し、コハク酸からの反応では、FADH2がピルビン酸1分子あたり1分子産生される。NADHのP/O比は、FADH2のP/O比よりも高い（NADHのP/O比は約2.5だが、FADH2のP/O比は約1.5である）ので、FADH2よりもNADHから生成されるATPの分子数の方が多いから。 ',
          commentary:
            'P/O比：1分子の電子供与体から形成されるATP分子数 ',
        },
        {
          detailInfo: '4',
          questionImg: [],
          questionSentence:
            '非ステロイド性抗炎症薬の作用機構について説明しなさい。',
          choices: [],
          answerImg: [],
          answer:
            '非ステロイド性抗炎症薬（NSAIDs）はCOX（シクロオキシゲナーゼ）を阻害するため、アラキドン酸からプロスタグランジン（PG）やトロンボサイクリンA2（TXA2）の生成を抑制するため、抗炎症作用を引き起こす。',
          commentary:
            'PGやTXA2は炎症や発熱を引き起こします。関連：第２生理・止血機序',
        },
        {
          detailInfo: '5',
          questionImg: [],
          questionSentence:
            'アロステリック効果による酵素の活性調節機構について説明しなさい。',
          choices: [],
          answerImg: [],
          answer:
            '酵素のアロステリック部位に調節因子が可逆的に結合することで酵素のコンホメーションが変化して、酵素の活性が調節される。',
          commentary:
            'アロステリック酵素は、ミカエリスメンテンの式に従わずシグモイド曲線になります。',
        },
        {
          detailInfo: '6',
          questionImg: [],
          questionSentence: '血液凝固系における還元型ビタミンKの生理作用について説明しなさい。',
          choices: [],
          answerImg: [],
          answer:
            '還元型ビタミンKは、血液凝固因子である第Ⅱ，Ⅶ，Ⅸ，Ⅹ因子をγ－カルボキシル化（アミノ酸であるGluをGlaに変化）させる酵素の補酵素として機能する。これにより、血液凝固因子が活性化される。',
          commentary:
            'γ―カルボキシル化を行うのは、ビタミンK依存性カルボキシラーゼという酵素です。余裕があればかけると最高！',
        },
        {
          detailInfo: '8',
          questionImg: [],
          questionSentence: '解糖系とクエン酸回路の代謝調節機構の全体としての相違点を述べなさい。なお、個々の基質や反応については述べる必要はありません。（300字以内）',
          choices: [],
          answerImg: [],
          answer:
            '細胞質基質で行われる解糖系では、血糖レベルによってインスリンやグルカゴンが分泌されることで、解糖系に関わる酵素の活性が調節される。対して、ミトコンドリアのマトリックスで行われるクエン酸回路は、産生されたNADHやFADH2が、電子伝達系において酸素を水にする反応で使用されNAD+やFADになることで、再度クエン酸回路で利用することができる。そのため、酸素によって間接的にクエン酸回路は調節されている。（189字）',
          commentary:
            '300字も書くことがない',
        },
        {
          detailInfo: '9',
          questionImg: [],
          questionSentence: '真核生物におけるmRNAの成熟化機構を3つ説明しなさい',
          choices: [],
          answerImg: [RTPCR],
          answer:
            '・5‘キャップ形成：前駆体mRNAの5’末端に7－メチルグアノシンが付加されることで、mRNAの安定性を高め、成熟mRNAの目印になる。 ・3‘ポリアデニル化：前駆体mRNAの3’末端にポリAテールが付加されることで、mRNAの安定性を高め、成熟mRNAの目印になる。 ・スプライシング：イントロンが除去されることで、エキソンが連結される。 ',
          commentary:
            '2024本試験でも出ているのでしっかり学習しよう',
        },
        {
          detailInfo: '10',
          questionImg: [],
          questionSentence: 'オートファジーのプロセスと3つの役割を説明しなさい。 ',
          choices: [],
          answerImg: [],
          answer:
            'プロセス：飢餓状態やストレスによる刺激によって、細胞内で膜形成が起こり、細胞内の不要なものを包み、オートファゴソームを形成する。その後、加水分解酵素をもつリソソームと融合することで、内容物が分解されオートリソソームが形成される。分解された内容物は再利用される。 役割 ・飢餓状態で栄養を作る ・細胞の新陳代謝 ・有害物の除去',
          commentary:
            '',
        },
        {
          detailInfo: '11',
          questionImg: [],
          questionSentence: 'SDS-PAGEとイムノブロッティング法の概要と原理を説明しなさい。',
          choices: [],
          answerImg: [],
          answer:
            'SDS-PAGE：タンパク質をSDSで変性させて、分子量に基づいて電気泳動で分離する方法イムノブロッティング法：SDS-PAGEで分離されたタンパク質を膜に転写する。その後、特異的に抗体反応を示す抗体を用いることで、目的のタンパク質を検出する方法。',
          commentary:
            '実習問題は割愛しようかと思いましたが、これは一応レジュメに存在していたので見ておいてもいいかも？',
        },
        {
          detailInfo: '12',
          questionImg: [],
          questionSentence: 'DNAの複製様式の違いとその理由を説明しなさい。',
          choices: [],
          answerImg: [],
          answer:
            'リーディング鎖は複製フォークに沿って連続的に合成される。ラギング鎖は、複製フォークとは逆方向に岡崎フラグメントとして不連続的に合成された後に、各々がDNAリガーゼによって繋がれて合成される。これは、DNAポリメラーゼが新生の5‘から 3’方向にのみにしか伸⾧ができず、DNA が逆平行の二本鎖構造を持つからである。',
          commentary:
            '「リーディング鎖は連続的」「ラギング鎖は不連続的」というのはポイントです。また、「DNAポリメラーゼが5‘から3’にしか伸⾧しない」というのは理由のポイントとなります。',
         },
         {
          detailInfo: '13',
          questionImg: [],
          questionSentence: 'DNAの修復機構とその特徴を説明しなさい。',
          choices: [],
          answerImg: [],
          answer:
            '・ミスマッチ修復 （特徴）複製の際のエラー修復である。 （機序）メチル化されている親鎖を同定後、娘鎖を切断。エクソヌクレアーゼがミスマッチを含むように娘鎖のヌクレオチドを取り除く。ポリメラーゼがギャップを埋める。リガーゼがつなぐ。 ・塩基除去修復 （特徴）ピンポイントな修復である。 （機序）塩基を除去して、エンドヌクレアーゼが娘鎖を切断、糖リン酸を除去する。その後はミスマッチと同じ。',
          commentary:
            '授業で紹介されていたのは4種類ありますが、全部書く必要はあるのか微妙なところです。二本鎖切断の修復とか書いても良いかもしれないです。 ',
         },
         {
          detailInfo: '14',
          questionImg: [],
          questionSentence: 'Restriction Fragment Length Polymorphism (RFLP)とは何か、利用方法を説明しなさい。',
          choices: [],
          answerImg: [],
          answer:
            '制限酵素断片⾧多型の略であり、DNA解析に用いられる分子生物学的技術である。この手法は、DNA配列中の特定の制限酵素切断部位の違いを利用して、個体や種のDNA多型を検出できる。利用方法としては、遺伝子疾患の遺伝子変異を検出するなどが挙げられる。 ',
          commentary:
		            'これは難しい。鎌状赤血球症とかの診断に使えます。',
         },
      ],
    },
    {
      groupTag: '2022本試(暫定)',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '酵素の触媒作用における「遷移状態の安定化」の概念を説明せよ',
          choices: [],
          answerImg: [enzyme],
          answer:
            '酵素は基質を遷移状態に安定化することによって、生成物に変換可能な反応中間体の濃度を非常に高め、その結果反応を促進する。',
          commentary:
            '基質の遷移状態の不安定さ＝反応の活性化エネルギーに相当し、酵素は遷移状態を安定化させることによって反応速度を早めている。この原理を利用したのが抗体触媒（抗体酵素）で、遷移状態にある基質に相当する遷移状態アナログに対する抗体を人工的な酵素として利用できる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '活性型ビタミンDの生理作用について説明せよ',
          choices: [],
          answerImg: [vitamin1, vitamin2],
          answer:
            '活性型ビタミンDは、小腸からのカルシウムやリン酸の吸収を促進したりすることによって、血中カルシウム濃度を上昇させる作用をもつ。',
          commentary:
            'ビタミンDは食物から摂取するほか、皮膚で紫外線照射によって合成する事ができる。肝臓で1位、腎臓で25位が水酸化されて活性型ビタミンD₃となる。不足するとくる病となり、骨が軟化する（最近の子どもは外に出ないので多い）。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '新生児黄疸について原因と治療法を簡潔に説明せよ',
          choices: [],
          answerImg: [jaundice],
          answer:
            '新生児、特に未熟児はビリルビン排泄に関わる酵素活性が低く、血中ビリルビン濃度が上昇することにより黄疸を引き起こすことがある。多くは成長とともに自然と改善されるが、深刻な場合は青色蛍光によりビリルビンを水溶性の異性体に変換する治療が行われる。',
          commentary:
            'その他新生児の赤血球は寿命が短く、また新生児の血液脳関門は未成熟でビリルビンの影響を受けやすい。黄疸は赤血球疾患（鎌状赤血球・G6PD欠損）による溶血性黄疸や、逸脱酵素ASTやALTの血清濃度が上昇する肝細胞性黄疸、閉塞性黄疸なども存在する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '細胞内消化について説明し、その生化学的意義を述べよ',
          choices: [],
          answerImg: [aminoPool],
          answer:
            'タンパク質は細胞内で、ユビキチン-プロテアソーム系によって選択的に、オートファジーによって非選択的に分解され、アミノ酸プールとして必要タンパク質の合成や、糖新生、ケトン体合成、ポルフィリン・クレアチンなどの窒素含有化合物合成などに利用されたり、エネルギー源として消費される。',
          commentary:
            '20種類以上のアミノ酸はすべて同じ方法で利用されるのではない。糖原性アミノ酸は糖新生に利用できるが、ケト原性アミノ酸（→アセチルCoA）からグルコースを合成することはできない。分解されるとケトン体と糖新生材料の両方を生成するアミノ酸も存在する。アミノ酸分解酵素の先天的欠損は尿に現れることが多い：フェニルケトン尿症はフェニルアラニン→チロシンの分解酵素の欠損、アルカプトン尿症はチロシン→→フマル酸の途中の酵素の欠損、メープルシロップ尿症は分枝アミノ酸分解酵素の欠損、ホモシスチン尿症はメチオニン→ホモシステイン→→の酵素の欠損など。これらは新生児スクリーニング検査の対象となる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'グルコースを代謝してピルビン酸を経て乳酸にする経路(a)と、ピルビン酸を代謝して二酸化炭素と水にする経路(b)の2つについて、(1)経路(a)が経路(b)より有利な点を述べよ。どの組織・生理条件において経路(a)がよりはたらくか。',
          choices: [],
          answerImg: [],
          answer:
            '赤血球や激しい運動中の筋肉などではたらいていて、酸素を消費せずATPを作り出すことができる点で有利。',
          commentary:
            '経路で実質的なNAD⁺の消費がない点もメリットとして存在するが、(b)経路と比べて有利であるかは微妙。（この議論は生物選択の方に）',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'グルコースを代謝してピルビン酸を経て乳酸にする経路(a)と、ピルビン酸を代謝して二酸化炭素と水にする経路(b)の2つについて、(2)経路(b)が経路(a)より有利な点を述べよ。どの組織・生理条件において経路(b)がよりはたらくか。',
          choices: [],
          answerImg: [],
          answer:
            '脳や肝臓や穏やかな運動中の筋肉などで働いていて、ATP産生効率が高い点で有利。',
          commentary:
            '心筋や褐色脂肪細胞など、ミトコンドリアが多い細胞で活発。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'グルコースを代謝してピルビン酸を経て乳酸にする経路(a)と、ピルビン酸を代謝して二酸化炭素と水にする経路(b)の2つについて、経路(a)で産生された乳酸はどのような経路で代謝されるか。',
          choices: [],
          answerImg: [coriCycle],
          answer: '血中を流れ肝臓で糖新生され、グルコースとなる（コリ回路）',
          commentary:
            '他の肝臓を介する回路としてはアラニン-グルコース回路が挙げられる。これは筋肉などでアミノ酸分解時発生するアンモニアをピルビン酸→アラニン（ALT）の形で血中へ流し、肝臓でアラニン→ピルビン酸（ALT）へと戻すことでアンモニアを回収し尿素回路へ投入した後ピルビン酸→グルコースに糖新生して血中へ流して再利用する回路。コリ回路ではNADHの処理を、アラニン-グルコース回路ではアンモニアの処理を肝臓に丸投げしているという形が共通している。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '肝臓で生成されたコレステロールは血液を介して末梢組織まで届けられる。(1)コレステロールは血液中でどのように運搬されるか。',
          choices: [],
          answerImg: [LDLVLDL],
          answer: '主にコレステロールエステルの形でVLDL/LDLで運搬される。',
          commentary:
            '肝臓でアセチルCoAから合成されたコレステロールはエステル化されリポタンパク質VLDLで運ばれるが、食事由来のコレステロールはエステル化された後小腸で生成されるキロミクロンに含まれ血中を運搬される。コレステロールは両親媒性だがコレステロールエステルは脂溶性。リポタンパク質には他にTAGなども多く含まれていて、キロミクロンやVLDLではコレステロールエステルより割合が大きい。キロミクロンやVLDLは脂肪組織にTAG（の脂肪酸）を渡した後、コレステロールエステルの割合が高いキロミクロンレムナントやLDLへと変化していく。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '肝臓で生成されたコレステロールは血液を介して末梢組織まで届けられる。(2)コレステロールは末梢組織でどのように取り込まれるか。',
          choices: [],
          answerImg: [endocytosisLDL],
          answer:
            '受容体に結合したLDLはクラスリン被覆小胞の形でエンドサイトーシスされる。',
          commentary:
            'apoB-100というアポリポタンパク質(キロミクロンはapoB-48)を受容体が認識してリポタンパク質丸ごとエンドサイトーシスを行う。この取り込まれ方は同じVLDLなどに含まれるTAGとは異なる：TAGはapoC-Ⅱを受容した毛細血管壁のリポタンパク質リパーゼによって脂肪酸とグリセロールに分解されたあとで、脂肪酸のみが脂肪細胞に取り込まれる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '脂質メディエーターとは何か説明せよ。',
          choices: [],
          answerImg: [lipidMediator],
          answer:
            '脂質メディエーターとは、（局所で）細胞間情報伝達などの生理活性をもつ脂質の総称である。',
          commentary:
            'プロスタグランジン(PG)、ロイコトリエン(LT)、血小板活性化因子(PAF)、内因性カンナビノイド、リゾホスファチジン酸、スフィンゴシン1-リン酸などを指す。脂肪酸（アラキドン酸）由来のものが多く、リン脂質由来、コレステロール由来のものも脂質メディエーターに分類される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'SARS-Cov2が短期間に多くの変異型を生み出している理由について、遺伝子複製の観点から説明せよ。',
          choices: [],
          answerImg: [COVID19],
          answer:
            'DNA は逆平行の二重らせん構造をとっており、二本鎖のDNAの間に塩基の部位を内部にしまうことができるので、塩基の損失や置換による遺伝子情報の変化・損失を抑えることができる。また複製において誤った塩基を付加された場合、相補鎖の関係からDNAポリメラーゼの持つ酵素によって除去されて正確なDNA合成が行われる。複製が正確に行われたとしても突然変異による一塩基変異が起こりうるが、相補的な塩基情報を用いるこ とで修復は可能である。これよりDNAは非常に安定しており、遺伝子情報を担う物質として適している。一方RNAは一本鎖であるため、DNAのような校正機構を持たず、変異が起こりやすい。また校正されないため変異が起こっても修復されることはなく変異は蓄積されていき、様々な性質を持つ変異ウイルスを生じやすい。コロナウイルスはプラスRNA一本鎖ウイルスとして知られている。そのためセントラルドグマにおいて転写は行われないが、DNA を遺伝子情報として持つ細胞と同じく翻訳を行い 遺伝情報の複製を行なっていく。しかし前述の通りDNAによる複製との比較よりRNAからの翻訳は不正確であり変異が非常に起こりやすい。そのため変異型ウイルスが多く現れ得る。このことは昨今の報道での変異型ウイルスや、各国のワクチン開発が遅れている原因となっていると考えられる。',
          commentary:
            'コロナウイルスはRNAウイルスで、自身のゲノムそのものがmRNAとして働き、ウイルス蛋白質を作り出す。細胞質内で自らが持つRNA依存性ポリメラーゼで複製を行う。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'コロナ診断のためのPCR法の原理を説明せよ。',
          choices: [],
          answerImg: [RTPCR, taqman],
          answer:
            'DNA は逆平行の二重らせん構造をとっており、二本鎖のDNAは相補的な塩基対間で形成される水素結合によって繋がっている。この繋がりは温度を上げることで切ることができ、これを変性という。また徐々に温度を下げていくことで水素結合が再形成されて 復元される。これらの作用を利用したのが PCR 法である。まず増幅したい領域の両端に相補的なプライマーDNA、鋳型のゲノム DNA、耐熱性を持つDNAポリメラーゼ、材料となる 4 種のヌクレオチドを混合する。そして温度を上げるとゲノムDNAは変性により一本鎖となる。その後徐々に温度を下げていくことでプライマーDNA とゲノムDNAの複製がお こる。次にDNAポリメラーゼの至適温度まで温度上昇することでプライマーからDNA合 成が起こっていく。この一連の操作を繰り返すことでプライマー間のDNAを特異的に増幅 することになる。このようにして生じた増幅断片を電気泳動にかける。そして検体において も同じようにした断片の泳動度と同じであればその断片は感染の疑いがあるといえる。こ のようにDNAの特性を使い PCR 法は行われる。',
          commentary:
            'コロナウイルスはRNAウイルスなので、まずcDNAに逆転写してからPCRで増幅する必要がある。実際のRT-PCRではこれをシークエンスするか、コロナウイルスの塩基配列に特異的に結合するプローブに蛍光色素をつけた試薬(Taqman法)で存在を調べる方法などが考えられる→特別講義「個人差の生化学」参考。実習の方法を使うのであればコロナウイルスに特異的な塩基配列を切断する制限酵素を探さなければいけない。',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },

        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '2021本試',
      groupContents: [
        {
          detailInfo: '1',
          questionImg: [],
          questionSentence:
            '胃を全摘手術した際に欠乏するビタミン、そのビタミンの欠乏により引き起こされる貧血について明確にしるし述べなさい。',
          choices: [],
          answerImg: [
            biochemistry2021_1_1,
            biochemistry2021_1_2,
            biochemistry2021_1_3,
          ],
          answer:
            'ビタミンB12が欠乏する。ビタミンB12が欠乏すると、メチオニンシンターゼの活性が低下し、THFが不足する。これにより、赤血球のDNA合成が滞り、骨髄中に未成熟の巨赤芽球が蓄積し、血中の赤血球が異常な大型血球に置き換わる、巨赤芽球性貧血が起こる。特に、ビタミンB12の不足による巨赤芽球性貧血を悪性貧血と呼ぶ。',
          commentary:
            'ビタミンB12の吸収には、胃の壁細胞から分泌される内因子が必要で、全摘によって内因子が分泌されなくなる。ビタミンB12の欠乏症は、悪性貧血の他に、神経障害、メチルマロン酸血症（尿症）、高ホモシステイン血症がある。',
        },
        {
          detailInfo: '2',
          questionImg: [],
          questionSentence:
            '酵素の活性と温度の関係について述べなさい。（150字以内）',
          choices: [],
          answerImg: [biochemistry2021_2],
          answer:
            '通常の反応と同じように温度を上げると酵素の活性は上昇する。ただし、温度を上げすぎると酵素のタンパク質が変性して失活するので活性は急激に低下する。したがって、それぞれの酵素には活性が最大になる最適温度が存在する。(105字)',
          commentary: '',
        },
        {
          detailInfo: '3',
          questionImg: [],
          questionSentence:
            ' グルコースアラニン回路について説明について述べよ。',
          choices: [],
          answerImg: [biochemistry2021_3],
          answer:
            '遊離アンモニアは毒性が高いので、アミノ酸に変えて生体にとって無害な状態にした後に血流によって肝臓に運ばれる。グルコースアラニン回路はその運搬系の一つであり、主として筋肉一肝臓間でのやり取りに関わっている。まず筋肉で解糖系により生じたビルビン酸にアンモニアを付加してアラニンとし、肝臓へ輸送する。肝臓ではアミノ基転移反応によってそのアラニンからピルビン酸を再生し、アンモニアを脱離するが、それぞれアンモニアは尿素回路へ入った後に尿素として尿から排出、ピルビン酸は糖新生経路へ入ってグルコースの生成に携わる。こうしてピルビン酸からグルコースが生成され今度は肝臓から筋肉に輸送される。',
          commentary:
            'アミノ酸分解で生じるアミノ基は、基本的には肝臓で尿素に変えられて排出される。アミノ酸分解は肝臓だけでなく筋肉など様々な組織で行われており（顕著なのは分枝アミノ酸であるバリン・ロイシン・イソロイシン）、生じたアミノ基をアラニンやグルタミンの形で肝臓へ血液輸送する。',
        },
        {
          detailInfo: '4',
          questionImg: [],
          questionSentence:
            '空腹時や好気的運動時には遊離脂肪酸の血中濃度が上昇すると考えられるが、その理由について肝臓と筋肉、脂肪でどのような代謝がおこっているか説明しなさい。ただしまとまりの反応は〇〇経路として良い。（500 字以内）',
          choices: [],
          answerImg: [
            biochemistry2021_4_1,
            biochemistry2021_4_2,
            biochemistry2021_4_3,
          ],
          answer:
            'まず、肝臓では脂肪酸はβ酸化され、アセチル CoAが多量に作られる。作られたアセチル CoAは一部 TCA 回路に入り、大部分がケトン体の合成に使用される。ケトン体は肝臓から血中に送り出され、全身の組織のエネルギー源として利用される。筋肉では肝臓と同様に脂肪酸をβ酸化してアセチルCoAを得る。その後、アセチルCoAをTCA 回路によっCO2 まで分解し、電子伝達系と酸化的リン酸化によってエネルギーを産生する。脂肪酸はトリアシルグリセロールとして脂肪組織に貯蔵されている。空腹時や好気的運動時には、グルカゴンやアドレナリンの作用により脂肪組織でホルモン感受性リパーゼが活性化し、トリアシルグリセロールの分解が進行する。それにより得られた脂肪酸がアルブミンと結合して親水性となり、遊離脂肪酸として血中に放出されることで血中脂肪酸濃度が上昇する。この脂肪酸は筋肉と肝臓で使用される。一方、トリアシルグリセロールの分解時に同時に産生されたグリセロールは肝臓で糖新生の素材として使用される。(446字)',
          commentary:
            '脂肪細胞のホルモン感受性リパーゼが空腹時グルカゴンやア運動時ドレナリンによって促進され、遊離脂肪酸が血中に放出される。脂肪細胞から血中へ放出された遊離脂肪酸は数分で肝臓や筋肉などに取り込まれる。　空腹時の代謝を問う問題。摂食時の分も確認しておきましょう。',
        },
        {
          detailInfo: '5',
          questionImg: [],
          questionSentence:
            '解糖系のNAD⁺について、⑴ 赤血球ではどのようにしてNADHに再生しているのか。⑵ これらの反応を継続して行うために必要な組織はなにか、またこれらの反応はどのような経路を辿るか。',
          choices: [],
          answerImg: [
            biochemistry2021_5_1,
            biochemistry2021_5_2,
            biochemistry2021_5_3,
          ],
          answer:
            '（1）赤血球にはミトコンドリアが存在しないので、酸素を還元してNADHを酸化することができない。そこで、代わりに解糖系の代謝産物であるピルビン酸を還元して乳酸にすることで、NADHを酸化してNAD⁺を再生している。（2）（1）で生成された乳酸を処理するために、肝臓（や心臓）が必要である。これらの臓器では血中から得た乳酸を酸化してピルビン酸に戻す（乳酸デヒドロゲナーゼの作用）。肝臓ではピルビン酸は糖新生によりグルコースに変換される（経路：ピルビン酸→オキサロ酢酸→ホスホエノールピルビン酸→→→グルコース6-P→）か、TCA回路（経路：ピルビン酸→アセチルCoA→→2CO₂など）で異化されATP合成に利用される。',
          commentary:
            '嫌気的条件を述べる。赤血球のほかに血管の少ない組織やがん細胞、激しい運動をする骨格筋などが挙げられる。血漿中の乳酸濃度が上昇すると乳酸アシドーシスとなる。',
        },
        {
          detailInfo: '6',
          questionImg: [],
          questionSentence: 'exonとintronについて説明しなさい。',
          choices: [],
          answerImg: [
            biochemistry2021_6_1,
            biochemistry2021_6_2,
            biochemistry2021_6_3,
          ],
          answer:
            'exonはメッセンジャーRNA前駆体から成熟メッセンジャーRNAに変換される際に、スプライシングを受けて残るメッセンジャーRNA前駆体の領域に相当するDNA上の領域である。一方、intronはexonに挟まれたDNA領域で、スプライシングによって除去されるメッセンジャーRNA 前駆体の領域に相当するDNA上の領域である。',
          commentary:
            'DNA模型の口頭試問で聞かれた人はその際の先生からのコメントを反映させた方が良いかもしれません。私は、どのような挙動をするかよりも定義が大事で、挙動は推測に過ぎず例外が出たらどうするんだ、と詰められました。',
        },
        {
          detailInfo: '7',
          questionImg: [],
          questionSentence: '半不連続的複製について説明しなさい。',
          choices: [],
          answerImg: [
            biochemistry2021_7_1,
            biochemistry2021_7_2,
            biochemistry2021_7_3,
            biochemistry2021_7_4,
          ],
          answer:
            'DNA は相補的な二本差であり、複製に必要なDNAポリメラーゼは5’→3’の方向へしか複製を進めることができない。二本鎖のうち、3’→5’方向の鎖を鋳型にして合成される鎖は DNAポリメラーゼによる伸長方向と複製フォークの進行とが同一方向になり、5’→3’へと連続的に合成される。一方、5’→3’方向の鎖を鋳型にして合成される鎖では、岡崎フラグメントと呼ばれる短い DNA鎖が5’→3’方向に合成され、DNAリガーゼによって一本の鎖に合成される。これを半不連続的複製という。',
          commentary:
            'リーディング鎖では連続的な合成が行われ、ラギング鎖では不連続的な合成が行われる。その他、DNA複製は半保存的複製の性質も持つ。複製後のDNAのうち片方が親から受け継がれた（保存された）鎖で、もう片方が新しく合成された（保存されていない）鎖であることから。',
        },
        {
          detailInfo: '8',
          questionImg: [],
          questionSentence: 'PCR検査の原理と測定方法について述べなさい。',
          choices: [],
          answerImg: [RTPCR],
          answer:
            'PCR 反応では、鋳型となる被験者のゲノムDNA鎖とDNAポリメラーゼ、増幅目的の領域の両末端に相補的に結合するプライマー、そして材料となる四種類のヌクレオチドを混合する。そして、これをまず 90°Cに加熱することで鉄型DNAを変性させ一本鎖にする。次に、温度を 50°Cまで低下させてプライマーと鋳型DNAのアニーリングを起こす。最後に、ポリメラーゼの最適温度である 70°Cまで上昇させてプライマーから DNA合成を生じさせる。以降この過程を繰り返すことでDNAの目的領域を増幅させる。PCR検査ではこの PCR 反応産物を電気泳動してバンドを観察することで、目的DNA領域が増幅されていたのかどうか、すなわちコロナ陽性だったのかどうかを確認する。',
          commentary:
            'コロナウイルスはRNAウイルスなので逆転写を行ったcDNAをPCRで増幅し調べる。PCRは精度が高いのでほんの少しのウイルス数でも増幅して検出することができるし、増幅される速度を調べることでウイルスの量を調べることができる。ただし、コロナウイルスは型（塩基配列）が変わりやすく、死滅したウイルスでも検出されてしまうので注意。実習でやったことを確認しておこう。口頭試問の勉強にもなるでしょう。',
        },
      ],
    },
    {
      groupTag: '2020本試',
      groupContents: [
        {
          detailInfo: '1',
          questionImg: [],
          questionSentence:
            'ミトコンドリアの電子伝達系におけるATP合成機構について説明しなさい。',
          choices: [],
          answerImg: [
            biochemistry_2020_1_1,
            biochemistry_2020_1_2,
            biochemistry_2020_1_3,
            biochemistry_2020_1_4,
            biochemistry_2020_1_5,
            biochemistry_2020_1_6,
          ],
          answer:
            'ミトコンドリアにおいて電子伝達系と酸化的リン酸化は緊密に共役している。まず、電子複合体が電子を供給する毎にマトリックスから膜間腔へと H＋を汲み出す。このH＋の濃度差によってプロトン勾配が生じて ATP 合成酵素がマトリックス内へと入り込む。これにより電子伝達で生じたエネルギーを ATP として捕捉し合成できる。このようなエネルギー変換の過程をとることで、ATP 合成のために高エネルギー中間体を使う必要がなく持続的な ATP 合成が行える。',
          commentary:
            '電子伝達系について聞かれているが、酸化的リン酸化反応についても書くとよい。化学浸透説のメリットについて書いてもなおよい。',
        },
        {
          detailInfo: '2',
          questionImg: [],
          questionSentence:
            'アンモニアは生体内で有毒であるが、ヒトのアミノ酸の合成および分解においてはアンモニアが低濃度に抑えられるのはなぜか説明しなさい。',
          choices: [],
          answerImg: [
            ammonia,
            // biochemistry_2020_2_1,
            // biochemistry_2020_2_2,
            // biochemistry_2020_2_3,
            // biochemistry_2020_2_4,
            // biochemistry_2020_2_5,
          ],
          answer:
            'アミノ酸はアミノ基を外すと糖代謝の中間体となり糖新生に利用できるため、まずアミノ基を外す反応がおこる。これをアミノ基転移反応といい、これによってグルタミン酸が生じる。このグルタミン酸は分解されてα-ケトグルタル酸とアンモニアとなる。ここで生じたアンモニアを肝臓へと運んで尿素とする必要があるのだが、アンモニアは有毒であるため肝臓までの輸送の際は比較的無害な物質へと変換されて運ばれる。この輸送法は２つあり、１つ目はグルタミンシンターゼである。このグルタミンシンターゼではアンモニアをグルタミン酸と結合させてグルタミンとし、肝臓まで送って再びアンモニアとグルタミン酸へと分解する。ここで生じたグルタミン酸は再利用される。もう１つはグルコース-アラニン経路である。こちらはアンモニアをピルビン酸と結合させてアラニンとして肝臓まで送る。肝臓でアラニンは再びアンモニアとピルビン酸へ分解され、ピルビン酸は糖新生でグルコースとされたのち解糖系を経て再びピルビン酸として利用される。このように２つの経路で運ばれたアンモニアは尿素回路にのり無毒化されていく。以上のように、体内において出来るだけ有毒なアンモニアが存在しないようになっていると言える。',
          commentary:
            'アンモニアはほとんどが肝臓の尿素回路で代謝される。組織で出てきたアンモニア（アミノ基）は、基本グルタミンかアラニンの形で肝臓へ輸送される。アラニンからグルタミン酸へアミノ基を転移する酵素をALT（アラニンアミノトランスフェラーゼ）という。ちなみにグルタミン酸からオキサロ酢酸へアミノ基を転移させ尿素回路の中間産物であるアスパラギン酸を生成する反応の酵素をAST（アスパラギン酸アミノトランスフェラーゼ）という。肝機能の障害や尿素回路の遺伝的欠陥によって高アンモニア血症を発症する。',
        },
        {
          detailInfo: '3',
          questionImg: [biochemistry2020_3_question],
          questionSentence:
            'ある酵素触媒反応の反応速度と基質濃度の関係は、阻害剤非存在下で以下のラインウィーバー・バークプロットに示される。この反応を阻害する阻害剤Iについて、阻害剤Iの阻害作用は競合的であった。阻害剤I存在下でのラインウィーバー・バークプロットがどのようになるか、以下のグラフに描きこみなさい。また、競合阻害によって起こる速度論的パラメーター(KmやVmax)の変化を150字以内で説明しなさい。',
          choices: [],
          answerImg: [biochemistry2020_3_answer],
          answer:
            '競合阻害剤は酵素の活性部位に可逆的に結合し、基質の結合を妨げる。競合阻害剤が存在しても最大反応速度Vmax は変化しない。一方、阻害剤の濃度を増加させると、見かけのミカエリス定数Kmは増加する。図において、阻害剤Iの非存在下および存在下でのプロットはy軸状の 1/Vmax で交わるが、阻害剤Iの存在下ではx切片の負の値が0に近づいており見かけのKmが増加したことが分かる。よって競合阻害である。(199字)',
          commentary:
            'Kmは反応速度が1/2 Vmaxとなるような基質の濃度であり、基質に対する酵素の親和性ともよばれる（Kmが大きいほど反応により多くの基質濃度が必要→基質親和性が低いといえる）。酵素のVmaxやKmは阻害剤の阻害様式（競合阻害or非競合阻害）によって変化し、非競合阻害では基質の濃度に関わらず一定の基質の反応が阻害される→Kmは変わらずVmaxは下がる。',
        },
        {
          detailInfo: '4',
          questionImg: [],
          questionSentence:
            '11-cis-レチナールの生理作用と欠乏症状について、100 字以上 200 字以下で説明しな さい。',
          choices: [],
          answerImg: [biochemistry_2020_4_1, biochemistry_2020_4_2],
          answer:
            '11-cis-レチナールはビタミンA由来の物質である。11-cis-レチナールはオプシンと結合してロドプシンとなる。このロドプシンは光を感受し視覚サイクルに関与する。そのためこの 11-cis-レチナールが欠乏すると夜盲症や眼球乾燥症といった主に眼球に関する症状がみられると言える(142字)',
          commentary: '',
        },
        {
          detailInfo: '5',
          questionImg: [],
          questionSentence:
            '代謝とは生命維持に関わる連続的な化学反応のことである。ヒトの肝臓の細胞におけるミトコンドリア中のアセチルCoAと細胞質中のアセチルCoAの生理的意義を、代謝の観点から比較して述べなさい。',
          choices: [],
          answerImg: [biochemistry_2020_5_1, biochemistry_2020_5_2],
          answer:
            '摂食後体内にはグルコースが大量に存在するためグルコースをエネルギーへと変換しようとする。グルコースははじめに解糖系に乗り最終的にピルビン酸へと変化する。このピルビン酸はミトコンドリア内でアセチルCoAへと変換されて TCA 回路でクエン酸が生じる。これによって TCA 回路がまわり ATP 合成へと進む。一方、クエン酸は過剰になると細胞質に輸送されてアセチルCoAとなり脂肪酸合成へと進む。そして空腹時のエネル ギー不足に応じて蓄えられていた脂肪酸は分解されていくことにより再びミトコンドリア内でアセチルCoAとして存在して、TCA 回路に再び乗りエネルギー不足を解消する。また 飢餓時は脂肪酸の過剰な分解によりミトコンドリア内でアセチルCoAが大量にあることとなり、ケトン体として代わりのエネルギー源として活躍する。このようにミトコンドリア内でのアセチルCoAは主にエネルギー生成へと、細胞質内のアセチルCoAはエネルギー貯蔵へと進める物質として意義があると言える。',
          commentary:
            'アセチルCoAが糖代謝と脂肪酸合成を結びつけていることが分かればよい。',
        },
        {
          detailInfo: '6',
          questionImg: [],
          questionSentence:
            '生体内のカスケード反応について、例を挙げて説明しなさい。(300 字以内、具体的な酵素の名前は書かなくてよい。)',
          choices: [],
          answerImg: [],
          answer:
            'カスケード反応とは多段階反応のことであり、はじめの刺激を段階を踏んで増幅させてすばやく反応を起こすことである。例えばグリコーゲン合成分解によるリン酸化カスケード反応である。摂食時グルコースは体内に大量にあるためグリコーゲンとして蓄積しようとする。その際インスリンが膵ランゲルハンス細胞から分泌されてグリコーゲンシンターゼを活性化しグリコーゲンホスホリラーゼは不活性化されてグリコーゲン合成の向きに進む。一方空腹時は逆でアドレナリンやグルカゴンの分泌でグリコーゲンシンターゼは不活性化されてグリコーゲンホスホリラーゼを活性することで分解の向きへと進む。このようにカスケード反応を使いグリコーゲン代謝の素早い調節を行うことができる。(314字)',
          commentary:
            'はじめの１行目がポイントで、素早い反応を行うのに効果的という旨を必ず書くこと。他は好きなものを書けばよし。アラキドン酸カスケードなど。',
        },
        {
          detailInfo: '7',
          questionImg: [],
          questionSentence:
            '(1)コロナウイルスの遺伝子複製と発現について説明し、コロナウイルスと 宿主細胞の遺伝子複製と発現の(2)共通点と(3)相違点を述べなさい。',
          choices: [],
          answerImg: [],
          answer:
            'DNA は逆平行の二重らせん構造をとっており、二本鎖のDNAの間に塩基の部位を内部にしまうことができるので、塩基の損失や置換による遺伝子情報の変化・損失を抑えることができる。また複製において誤った塩基を付加された場合、相補鎖の関係からDNAポリメラーゼの持つ酵素によって除去されて正確なDNA合成が行われる。複製が正確に行われたとしても突然変異による一塩基変異が起こりうるが、相補的な塩基情報を用いるこ とで修復は可能である。これよりDNAは非常に安定しており、遺伝子情報を担う物質として適している。一方RNAは一本鎖であるため、DNAのような校正機構を持たず、変異が起こりやすい。また校正されないため変異が起こっても修復されることはなく変異は蓄積されていき、様々な性質を持つ変異ウイルスを生じやすい。コロナウイルスはプラスRNA一本鎖ウイルスとして知られている。そのためセントラルドグマにおいて転写は行われないが、DNA を遺伝子情報として持つ細胞と同じく翻訳を行い 遺伝情報の複製を行なっていく。しかし前述の通りDNAによる複製との比較よりRNAからの翻訳は不正確であり変異が非常に起こりやすい。そのため変異型ウイルスが多く現れ得る。このことは昨今の報道での変異型ウイルスや、各国のワクチン開発が遅れている原因となっていると考えられる。',
          commentary:
            'コロナウイルスはRNAウイルスで、自身のゲノムそのものがmRNAとして働き、ウイルス蛋白質を作り出す。細胞質内で自らが持つRNA依存性ポリメラーゼで複製を行う。',
        },
        {
          detailInfo: '8',
          questionImg: [],
          questionSentence:
            'COVID-19 感染疑いの検体(唾液、咽頭ぬぐい液)のPCR検査を行う際の大まかな手順と準備物を示しなさい。(実際に行われている real-time PCR、実習で行ったゲル電気泳動法のどちらを答えてもよい。ただし、どちらを説明したか明確にすること。)',
          choices: [],
          answerImg: [RTPCR],
          answer:
            'DNA は逆平行の二重らせん構造をとっており、二本鎖のDNAは相補的な塩基対間で形成される水素結合によって繋がっている。この繋がりは温度を上げることで切ることができ、これを変性という。また徐々に温度を下げていくことで水素結合が再形成されて 復元される。これらの作用を利用したのが PCR 法である。まず増幅したい領域の両端に相補的なプライマーDNA、鋳型のゲノム DNA、耐熱性を持つDNAポリメラーゼ、材料となる 4 種のヌクレオチドを混合する。そして温度を上げるとゲノムDNAは変性により一本鎖となる。その後徐々に温度を下げていくことでプライマーDNA とゲノムDNAの複製がお こる。次にDNAポリメラーゼの至適温度まで温度上昇することでプライマーからDNA合 成が起こっていく。この一連の操作を繰り返すことでプライマー間のDNAを特異的に増幅 することになる。このようにして生じた増幅断片を電気泳動にかける。そして検体において も同じようにした断片の泳動度と同じであればその断片は感染の疑いがあるといえる。こ のようにDNAの特性を使い PCR 法は行われる。',
          commentary:
            'コロナウイルスはRNAウイルスなので、まずcDNAに逆転写してからPCRで増幅する必要がある。実際のRT-PCRではこれをシークエンスするか、コロナウイルスの塩基配列に特異的に結合するプローブに蛍光色素をつけた試薬(Taqman法)で存在を調べる方法などが考えられる→特別講義「個人差の生化学」参考。実習の方法を使うのであればコロナウイルスに特異的な塩基配列を切断する制限酵素を探さなければいけない。',
        },
        {
          detailInfo: '9',
          questionImg: [],
          questionSentence:
            '（1）カルタヘナ法の目的について説明し、（2）実際の生化学実習において具体的にどのような注意を必要としたか、（3）医学領域においてどのような場合がこの法令により規制されるかについて説明しなさい。',
          choices: [],
          answerImg: [],
          answer:
            '（1）遺伝子組換え生物の使用等による生物多様性への悪影響の防止（2）実習においては大腸菌の組換え実験の際にこのカルタヘナ法の遵守を必要とする。例えば、実験室に「関係者以外立ち入り禁止」との張り紙を貼り、実習中は組換え生物の拡散を防ぐために密室にして入室制限をする。また使用したチップ等も不活性化をしてから廃棄するため専用の回収 BOX に集めることが必要である。宿主又は供与体の性質に応じてクラス 1〜4 まで分類されて、これに応じて拡散防止措置をとる。（3）遺伝子組み換えを施した大腸菌を、普通の水道の流しに捨てた場合。',
          commentary:
            '口頭試問で、実習中にカルタヘナ法に違反すると誰が処罰されるか、という質問があったらしい。実験者と学長である。',
        },
      ],
    },
    {
      groupTag: '2019本試',
      groupContents: [
        {
          detailInfo: '1',
          questionImg: [],
          questionSentence:
            'ジヒドロ葉酸レダクターゼはテトラヒドロ葉酸(THF)の生成を触媒する NADPH 依存性レダクターゼである。 (1)NADPH の生体内における役割を説明せよ。(50 字以内)（2）ジヒドロ葉酸レダクターゼの阻害剤が抗がん剤に応用されているのはなぜか。THF の生理作用にも言及して説明せよ。(200 字以内)',
          choices: [],
          answerImg: [biochemistry2019_1_1, biochemistry2019_1_2],
          answer:
            '（1）細胞障害性をもつ活性酸素種の一種である過酸化水素を消去する際に酸化されたグルタチオンを再還元する。(49字)（2）THFは、葉酸の活性型であり、一炭素単位の運搬体として機能し、メチオニン、プリンヌクレオチド、TMP の合成に関わるため、細胞分裂の盛んな組織に多く、細胞増殖や成長に必要な物質である。そのため、阻害剤を用いて、THF の生成を触媒するジヒドロ葉酸レダクターゼを阻害することで、がん細胞の増殖と成長を抑えることができるからである。 この際、正常細胞も標的となるが、がん細胞の方が増殖が速いため、より影響を受ける。(205字)',
          commentary:
            'NADPH/NADP⁺は電子供与体で、上述の過酸化水素の還元に関わるほか、シトクロムp450モノオキシゲナーゼが触媒する反応(A-H + O₂ + NADPH + H⁺ → A-OH + H₂O + NADP⁺:酸素原子1個を付加することによる水酸化)にも必要で、同化反応などで多用される還元的生合成に利用される。合成はペントースリン酸経路・リンゴ酸デヒドロゲナーゼなどで行われる。ペントースリン酸経路のグルコース6リン酸デヒドロゲナーゼが欠損すると赤血球でNADPH産生能が低下し、溶血が起きやすくなる。※赤血球の寿命が縮みマラリア耐性を得るので中東などを中心に2億人以上の患者がいる。',
        },
        {
          detailInfo: '2',
          questionImg: [],
          questionSentence: '化学浸透圧説について説明せよ。',
          choices: [],
          answerImg: [
            biochemistry2019_2_1,
            biochemistry2019_2_2,
            biochemistry2019_2_3,
          ],
          answer:
            '電子伝達系で遊離したエネルギーは H⁺の電気化学ポテンシャルに変換され、 ATP 合成酵素はこのH⁺駆動力を利用して ATP 合成を行う、という説。すべての生命に普遍的な生体エネルギー変換の原理を説明でき、ATP 合成のために、物質(高エネルギー中間体)をいちいち使う必要がなく、ATP合成を持続的に行える。',
          commentary:
            '酸化的リン酸化におけるATPシンターゼ（複合体Ⅴ）は電子伝達鎖によって生じたプロトン勾配のエネルギーを使ってATPを合成するが、これとは真逆で、ATPを使用してリソソームなどでプロトン勾配を作り出す酵素V-ATPaseも細胞内には存在する。このV-ATPaseはリソソームやオルガネラの酸性化だけでなく、破骨細胞や発生初期の極性の形成に重要な役割を担っている。→特別講義「疾患発症に関わる酸性オルガネラの高次構造」',
        },
        {
          detailInfo: '3',
          questionImg: [],
          questionSentence:
            'PIP₂(ホスファチジルイノシトール 4,5 ビスリン酸)のシグナル伝達について説明せよ。',
          choices: [],
          answerImg: [
            biochemistry2019_3_1,
            biochemistry2019_3_2,
            biochemistry2019_3_3,
          ],
          answer:
            'ホルモンが GPCR に特異的に結合すると、Gタンパク質のαサブユニットの GDP-GTP 交換反応が起こる。活性化したαサブユニットは PLC を活性化し、活性化した PLC はPIP₂を DG(ジアシルグリセロール)と IP₃(イノシトール 1,4,5-トリスリン酸)に切断する。細胞膜に残った DG は PKC を活性化する。また、IP₃ が小胞体の IP₃ 依存性 Ca²⁺チャネルに結合して Ca²⁺を 細胞質内に大量に放出させ、その Ca²⁺も PKC を活性化させる。活性化された PKC がタンパク質をリン酸化することで、細胞内応答が起こる。',
          commentary: '',
        },
        {
          detailInfo: '4',
          questionImg: [],
          questionSentence:
            'ライソゾーム病(リソソーム病)とは何か。またその機序について説明せよ。(200 字以内)',
          choices: [],
          answerImg: [biochemistry2019_4_1, biochemistry2019_4_2],
          answer:
            'リソゾーム中には数多くの分解酵素が存在しており、老廃物・不要物の分解を行う。この分解酵素の一つが先天的に欠損しているために起こる病気がリソゾーム病である。欠損する酵素の種類によって 色々な病気があり、症状も異なってくる。リソソームの中に分解されない老廃物が次第に蓄積していくことで病気が進行していく。(150字)',
          commentary: '',
        },
        {
          detailInfo: '5',
          questionImg: [],
          questionSentence:
            'グリコーゲン代謝において、合成と分解はそれぞれグリコーゲンシンターゼとグリコーゲンホスファターゼによって相反的に調節されている。（1）なぜ相反的に調節されているのか説明せよ。(100 字以内) （2）グリコーゲンシンターゼとグリコーゲンホスファターゼはどのようにして相反的に調節されているか、説明せよ。(300 字以内)',
          choices: [],
          answerImg: [biochemistry2019_5],
          answer:
            '（1）もし同化経路と異化経路が同じ酵素により制御されていれば、異化経路(エネルギー産生) が触媒されるのと同時に、分子の合成(同化経路)も触媒されてしまう。これでは反応の緻密な制御ができない。同化経路と異化経路が異なる酵素によって触媒されると、片方の経路の活性のみが上昇するため反応の方向性を決定することができ、代謝の緻密な制御が可能となる。(168字)（2）グリコーゲンシンターゼとグリコーゲンホスホリラーゼはともにアロステリックな調節を受けている。血糖値が高いと、グリコーゲンシンターゼはグルコース 6 リン酸(G6-P)に よって活性化され、グリコーゲンホスホリラーゼは ATP と G6-P によって阻害される。その結果、グリコーゲン合成が進む。運動時には、筋肉や肝臓では細胞内 Ca2+濃度が上昇し、ATP が消費され AMP が生じる。 グリコーゲンホスホリラーゼは Ca²⁺と AMP により活性化され、グリコーゲン分解が進む。 また肝臓では、Ca²⁺によりプロテインキナーゼCが活性化されグリコーゲンシンターゼがリン酸化不活化されてグリコーゲン合成は抑制される。(311字)',
          commentary: '',
        },
        {
          detailInfo: '6',
          questionImg: [],
          questionSentence:
            'DNA の複製おいて、複製フォークが進むにつれ、3’→5’方向の親鎖に対してはDNAポリメラーゼで連続的に合成できるが、5’→3’方向の親鎖に対しては既知のDNAポリメラーゼでは連続的に合成できない。しかし 5’→3’方向へも複製フォークが進むと同時にDNAは合成されているように見える。これはなぜか、図を用いて説明せよ。',
          choices: [],
          answerImg: [biochemistry2019_6_ans],
          answer:
            '3’→5’方向の親鎖の複製が進み、5’→3’方向の親鎖がある程度露出するたびに、DNAポリメラーゼが新しいプライマーRNAに結合し、岡崎フラグメントを作り始める。その後、DNAポリメラーゼが断片の合成を完了すると、プライマーRNA除去され、DNAに置換される。その切れ目をDNAリガーゼが共有結合でつなぎ、岡崎フラグメントを連結する。これにより、5’→3’方向へもDNAを合成することができる。',
          commentary: 'ラギング鎖とリーディング鎖',
        },
        {
          detailInfo: '7',
          questionImg: [],
          questionSentence:
            'DNA の変性と復元について説明し、この機構が分子生物学的、分子工学的にどのように活用されているか説明せよ。',
          choices: [],
          answerImg: [],
          answer:
            'DNA は逆平行の二重らせん構造をとっており、二本鎖のDNAは相補的な塩基対間で形成される水素結合によってつながっている。この水素結合は温度を 上げることで切ることができる。これをDNAの変性という。また温度を徐々に下げることで元の塩基対 間の 水素結合が再形成される。これをDNAの復元 (アニーリング) という。アニーリングは塩基対が相補的であれば起こり、相補鎖は必ずしも元ペアであったDNA鎖である必要はない。このメカニズムが応用されている例としては PCR 法が挙げられる。',
          commentary: '',
        },
        {
          detailInfo: '8',
          questionImg: [],
          questionSentence:
            'HbA1c とは何か。また、HbA1c を糖尿病の診断に用いることの意義を血糖値との違いに言及して説明せよ。',
          choices: [],
          answerImg: [biochemistry2019_8],
          answer:
            'HbA1c とはグルコースが結合したヘモグロビンである。生理的条件下において赤血球の ヘモグロビンは寿命 120 日間でゆっくりと血糖と結合して糖化するが、この結合の程度は過去 1~2 か月間における血中のグルコース平均濃度に比例する。したがって HbA1c 値測定は過去 1~2 か月間における平均血糖値を反映しており、血糖コントロールの指標となる。 糖尿病患者は血中のグルコース濃度が慢性的に高いためこの HbA1c の濃度が高くなる。よって HbA1c 値測定は糖尿病を判断する指標として用いられる。',
          commentary:
            '生理的条件下で、HbAはゆっくり非酵素的に糖鎖が付加されていく。',
        },
      ],
    },
    {
      groupTag: '2018本試',
      groupContents: [
        {
          detailInfo: '1',
          questionImg: [],
          questionSentence:
            '糖化へモグロビンとは何か?生成機構と臨床における意義も含めて説明しなさい。',
          choices: [],
          answerImg: [biochemistry2018_1],
          answer:
            '糖化ヘモグロビンは、ヘモグロビン β 鎖末端のバリンの NH₂基にグルコースが結合したもので、AGEs になる前の中間物質である。糖化ヘモグロビン量は、過去 1〜2 ヶ月の平均の血糖を反映しているので、血糖コントロールの指標となり、糖尿病の判定基準にも用いられる。また、溶血性貧血など、赤血球寿命が短縮する場合は、糖化ヘモグロビンの値は低くなる。',
          commentary:
            '生理的条件下で、HbAはゆっくり非酵素的に糖鎖が付加される。糖化（糖鎖付加）ヘモグロビンで最も多量にあるのがHbA1cである。',
        },
        {
          detailInfo: '2',
          questionImg: [],
          questionSentence:
            'ジオキシゲナーゼは何の反応を触媒するかを答えよ。また、これの先天的欠損によって起こる病とその症状について述べよ。',
          choices: [],
          answerImg: [biochemistry2018_2],
          answer:
            '空気中の酸素分子を必須アミノ酸であるトリプトファンに取り込む反応(ジオキシゲナーゼ反応)を触媒する。アルカプトン尿症が起こり、症状は、ホモゲンチジン酸尿、大関節の関節炎、軟骨・コラーゲン組織への色素沈着がある。',
          commentary:
            'ジオキシゲナーゼはトリプトファン分解の第一段階の酵素であるほか、フェニルアラニン・チロシンの芳香環構造の開裂にも用いられる。アルカプトン尿症のほかにも、タンパク質の分解過程の酵素の欠損による疾患として、フェニルケトン尿症・メープルシロップ尿症・ホモシスチン尿症などが挙げられる。フェニルケトン尿症はフェニルケトン（→チロシン）の分解酵素の欠損で、知的障害・発育遅延などの症状がみられるので、早期のフェニルアラニン摂取制限とチロシン摂取が必要となる。メープルシロップ尿症ではバリン・ロイシン・イソロイシンの分枝アミノ酸共通の分解酵素が欠損していて、特有のメープルシロップのようなにおいのする尿が特徴的である。治療されない場合は生後数週間で死に至る。これらの疾患は新生児スクリーニングの対象で、早期発見することによって症状を緩和することができる。ホモシスチン尿症はメチオニンの分解過程酵素の欠損で、治療法としてはメチオニンの摂取制限とこの酵素を経由せずメチオニン→SAM→→メチオニンの再生経路を触媒する補酵素である葉酸・ビタミンB12、欠損酵素の補酵素であるビタミンB6の投与が有効である。',
        },
        {
          detailInfo: '3',
          questionImg: [],
          questionSentence:
            'ワルファリン投与時の二重逆数プロットの変化、血液凝固反応における還元型ビタミンKの生理的意義について説明せよ。',
          choices: [],
          answerImg: [biochemistry2018_3],
          answer:
            'ワルファリンはビタミン K エポキシドレダクターゼを競合阻害する。これによって、二重逆数プロットのグラフは、x切片が大きくなり、y切片は変化せず、傾きは大きくなる。血液凝固反応における還元型ビタミン K はタンパク質中のグルタミン酸残基のカルボキシル化(Glu→Gla)を触媒し、ビタミン K 依存性カルボキシラーぜの補酵素として機能する。 血液凝固因子の Gla 残基が Ca²⁺をキレート化し生理作用を示す。',
          commentary: '',
        },
        {
          detailInfo: '4(1)',
          questionImg: [],
          questionSentence:
            '（１）コレステロールは血中でどのように運ばれるか説明せよ。',
          choices: [],
          answerImg: [biochemistry2018_4_1],
          answer:
            '（1）コレステロールは両親媒性だが血中ではほとんどが疎水性の高いコレステロールエステルになり、リポタンパク質のコアに取り込まれて運搬される。',
          commentary:
            'コレステロールのヒドロキシ基が脂肪酸とエステル結合することで親水性を失う。TAGがキロミクロンやLDLに含まれるがHDLにはほとんど含まれない一方で、コレステロールエステルはLDLにもHDLにもキロミクロンにも含まれる。',
        },
        {
          detailInfo: '4(2)',
          questionImg: [],
          questionSentence:
            '（2）スタチン系治療薬Aが、HMG-CoAリダクターゼを阻害する時の阻害様式について説明せよ。 ',
          choices: [],
          answerImg: [biochemistry2018_4_2],
          answer:
            '（2）スタチン系治療薬 A は HMG-CoA と構造類似物質のため、HMG-CoA リダクターゼの競合阻害剤となる。酵素である HMG-CoA リダクターゼの活性部位への結合を、本来の基質である HMG-CoA と競合的に行うことで、HMG-CoA リダクターゼを阻害する。',
          commentary: '',
        },
        {
          detailInfo: '4(3)',
          questionImg: [],
          questionSentence:
            '（3）LDL受容体が細胞内に取り込まれるのはどんな場合か?また、その機構について説明せよ。',
          choices: [],
          answerImg: [biochemistry2018_4_3],
          answer:
            '（3）LDL 受容体が細胞内に取り込まれるのは LDL を取り込むときである。LDL 受容体が LDL 上の apoB-100 に結合し、エンドサイトーシスを開始する。LDL はエンドソーム内に移行し、LDL 受容体は分離されて小胞内に入り、細胞表面へとリサイクルされる。',
          commentary:
            'apoB-100はVLDL~HDLに存在する。apoB-48はキロミクロンに特異的である。',
        },
        {
          detailInfo: '4(4)',
          questionImg: [],
          questionSentence:
            '（4）スタチン系治療薬Aが血中コレステロール濃度を下げる機構について説明せよ。',
          choices: [],
          answerImg: [biochemistry2018_4_4],
          answer:
            '（4）アセチルCoAからコレステロールが生成される過程で、HMG-CoA が酵素である HMG-CoAリダクターゼによりメバロン酸へ変換される。スタチン系治療薬 A は、HMG-CoA リダクターゼの競合阻害剤としてこの反応を阻害することで、血中コレステロール濃度を下げる。',
          commentary:
            'HMG-CoAリダクターゼが律速酵素。競合阻害剤は基質結合部位に結合することで酵素の作用を阻害する。',
        },
        {
          detailInfo: '5',
          questionImg: [],
          questionSentence:
            '遺伝子からmRNAが合成される過程とその調節機構について説明せよ。',
          choices: [],
          answerImg: [biochemistry2018_5],
          answer:
            '転写の開始は，TATAボックスや CAATボックス，GCボックスといったコンセンサス配列を含むプロモーター領域に基本転写因子と呼ばれるタンパク質が結合することによって起こる。続いて基本転写因子同士や基本転写因子とRNAポリメラーゼIIが結合する。RNAポリメラーゼによってDNA配列の転写産物が合成され始め伸張していくがその方向は 5’ から 3’方向である.DNA 配列の中にはエンハンサーと呼ばれるものがあり，ここにアクチベーターと呼ばれる転写因子が結合することによって転写開始の効率は上がる.こうしてできた mRNA前駆体はその後，転写後修飾を受ける。具体的には 5’末端へのキャップ構造の付加と3’末端へのポリAテール付加である.そしてイントロンを除去してエキソンを繋ぎ合わせるスプライシングの過程を経てmRNAが完成する.',
          commentary:
            '2022年度のDNA模型の対象となったPNMT遺伝子ではTATA boxとGC boxが両方存在していたが、GC boxはどちらかというと転写の活発な遺伝子にのみみられるため、コアプロモーターであるTATA boxに対してエンハンサーの役割を担っていると考えられる。',
        },
        {
          detailInfo: '6',
          questionImg: [],
          questionSentence: 'カルタヘナ法について説明しなさい。',
          choices: [],
          answerImg: [],
          answer:
            '目的は遺伝子組み換え生物等の使用等による生物多様性への悪影響を防ぐこと。 実習において、試験管内で組換えたDNAを持つプラスミドを大腸菌に導入する実験を行った。カルタヘナ法に基づき、実験室には「関係者以外立ち入り禁止」の表示があり、実習中は組み換え生物を外部に拡散させないために、実験室を密室にし、入退室の制限を行なった。使用したチップ等も廃棄前に不活化の措置を講ずるために専用の BOX に回収した。',
          commentary: '',
        },
        {
          detailInfo: '7',
          questionImg: [],
          questionSentence:
            'V-ATPaseとは何か?また、哺乳動物における生理的役割は何か?説明せよ。',
          choices: [],
          answerImg: [biochemistry2018_7],
          answer:
            'プロトン輸送 ATP アーゼであり、細胞内コンパートメントの酸性化を担うタンパク質である。オルガネラ小胞の膜に存在するタンパク質で、ATP を燃料とし回転運動でプロトンを輸送しオルガネラ内を酸性化しタンパク質の品質管理や神経伝達、免疫反応を支える役割。',
          commentary: '特別講義の内容？',
        },
      ],
    },
    {
      groupTag: '2017本試',
      groupContents: [
        {
          detailInfo: '1',
          questionImg: [],
          questionSentence:
            '（1）アンフィンセンのドグマとはどのようなドグマか。その根拠となる実験を示し説明しなさい。（2）細胞内ではこのドグマは必ずしも成立しない。その理由を説明しなさい。',
          choices: [],
          answerImg: [],
          answer:
            '（1）アンフィンセンは、あるタンパク質に変性剤(尿素とβ―メルカプトエタノール)を加え、 水素結合とジスルフィド結合を切断する処理を行い、変性させた後、変性剤を取り除いた。 その結果、変性したタンパク質がもとの立体構造に自発的に折りたたまれた。 この実験から導かれた結論である「アミノ酸配列(一次構造)が高次構造を決定する」というドグマがアンフィンセンのドグマである。（2）細胞内では、タンパク質濃度がかなり高い。そのため、タンパク質の折りたたみ過程において、そのタンパク質の疎水性部分が他のタンパク質の疎水性部分と凝縮してしまったり、あるいは、他のタンパク質の持つ電荷の作用などにより、ネイティブな構造に折りたたまれないことがある。これらの理由から、細胞内において必ずしも一次構造が高次構造を決定するとは限らない。',
          commentary: '参考：シャペロン',
        },
        {
          detailInfo: '2',
          questionImg: [],
          questionSentence:
            'ミトコンドリアにおける脱共役剤とはどのようなものか説明しなさい。',
          choices: [],
          answerImg: [uncouplingProtein],
          answer:
            '脱共役剤とは、電子伝達鎖による電子伝達と酸化的リン酸化による ATP の合成を脱共役させるものである。脱共役剤には、プロトンと結合した状態で膜間腔とマトリックスの間を移動できるものがある。このような物質は膜間腔でプロトンと結合し、マトリックスでそれを放出することで膜間腔内のプロトン勾配を解消し、酸化的リン酸化を起こせなくすることで脱共役を起こす。これにより非ふるえ熱が発生する。',
          commentary: '参考：褐色脂肪細胞などで脱共役タンパク質がみられる。',
        },
        {
          detailInfo: '3(1)',
          questionImg: [],
          questionSentence:
            '（1）cAMPは受容体などと共役してはたらくアデニル酸シクラーゼによって合成され、細胞内のcAMP依存型プロテインキナーゼを活性化する。このような物質をなんというか。また、なぜこのような物質が必要なのか説明せよ。',
          choices: [],
          answerImg: [],
          answer:
            '（1）セカンドメッセンジャーという。 ホルモンや神経伝達物質などが、細胞表面の受容体に結合することで一連の反応を引き起こし、その結果として特異的な細胞応答が生じる。 この時、ホルモンや神経伝達物質と細胞への最終的な効果の間に介在する物質(セカンドメッセンジャー)が必要であるため。',
          commentary:
            '水溶性ホルモンの受容体は細胞膜にある一方で、標的となるタンパク質は細胞質にある。この間を埋める細胞内シグナル伝達としての働きと、少ない刺激伝達でも増幅して十分な応答を誘導する働きの2点。　例えばグルカゴンやアドレナリンはGタンパク共役型の受容体/GPCRで受容され、アデニル酸シクラーゼを活性化させcAMPを増やすことでグリコーゲン分解を促進する。',
        },
        {
          detailInfo: '3(2)',
          questionImg: [],
          questionSentence:
            '（2）プロテインホスファターゼとは一般的にどのような反応を触媒する酵素か。 ',
          choices: [],
          answerImg: [],
          answer:
            '（2）タンパク質のリン酸化された残基を脱リン酸化する反応を触媒する酵素。',
          commentary: 'プロテインキナーゼの逆',
        },
        {
          detailInfo: '3(3)',
          questionImg: [],
          questionSentence:
            '（3）ヒトにおいてエネルギー源が過剰な時、トリアシルグリセロールが合成されて脂肪組織に蓄えられるが、この過剰なエネルギー源はどのようにして脂肪酸合成酵素の基質になるか説明しなさい。',
          choices: [],
          answerImg: [cytoplasmAcetylCoA],
          answer:
            '（3）エネルギー源が過剰な時、細胞内ATP濃度が上昇し、TCA回路はイソクエン酸からαケトグルタル酸への反応で阻害されるためにクエン酸が蓄積する。 これらのクエン酸は細胞質へ輸送された後、オキサロ酢酸とアセチルCoAに分解される。 このように生成されたアセチルCoAがカルボキシル化され、マロニルCoAとなる。 このようにして脂肪酸合成酵素の基質であるマロニルCoAが得られる。',
          commentary:
            'ATPが過剰→TCA回路抑制→脂肪酸合成。脂肪酸合成の律速酵素がその入口：アセチルCoA→マロニルCoAのアセチルCoAカルボキシラーゼ。インスリンで脱リン酸化されても活性化する。その際に余っているアセチルCoAをミトコンドリアマトリックス→細胞質へクエン酸を経由して輸送する必要がある。これがクエン酸シャトルと呼ばれる。',
        },
        {
          detailInfo: '4',
          questionImg: [],
          questionSentence:
            'ヘキソキナーゼには四種類のアイソザイムがあり、主に筋肉に存在するヘキソキナーゼは Km が約 0.1mM、主に肝臓に存在するグルコキナーゼは Km が約 10mM である。 Km とはどのようなものか説明しなさい。また、上述のことは血糖値とどのような関連があるか説明しなさい。',
          choices: [],
          answerImg: [glucokinase],
          answer:
            'Km とは反応初速度が最大反応速度の半分の時の基質濃度のことであり、基質に対する酵素の親和性の指標として用いられる。血糖値が低いときは、筋肉などの組織において、Km値が低く、グルコース濃度が低くてもグルコースを効率的にリン酸化できるヘキソキナーゼが働き、一方で血糖値が高いときは、肝臓などの組織において、Km 値が高く、高濃度のグルコースを素早くリン酸化できるグルコキナーゼが働く。',
          commentary:
            'グルコキナーゼは肝臓と膵臓に存在する。肝臓ではグリコーゲン合成に、膵臓β細胞ではグルコース濃度センサー（→インスリン分泌）として利用される。グルコキナーゼはVmaxは高いがKmも大きく、基質を高濃度にしないと反応速度が上がらない→基質親和性が低いといえる。',
        },
        {
          detailInfo: '5',
          questionImg: [],
          questionSentence: 'Exon と Intron について説明しなさい。',
          choices: [],
          answerImg: [
            biochemistry2017_5_1,
            biochemistry2017_5_2,
            biochemistry2017_5_3,
          ],
          answer:
            'exonはメッセンジャーRNA前駆体から成熟メッセンジャーRNAに変換される際に、スプライシングを受けて残るメッセンジャーRNA前駆体の領域に相当するDNA上の領域である。一方、intronはexonに挟まれたDNA領域で、スプライシングによって除去されるメッセンジャーRNA 前駆体の領域に相当するDNA上の領域である。',
          commentary:
            '頻出。イントロンの前後には特徴的な配列GU-AGがあり。ここがスプライシングに利用される。exonであってもスプライシングされることがあるので注意→選択的スプライシング',
        },
        {
          detailInfo: '6',
          questionImg: [],
          questionSentence:
            'HIV ウイルスの感染予防のためにワクチンを開発する際問題点となるのは何か。HIV ウイルス複製機構をもとに考察しなさい。',
          choices: [],
          answerImg: [],
          answer:
            'HIV ウイルスはヘルパーT細胞内に侵入し、逆転写酵素を使い自らのゲノミックRNAからDNAを逆転写により合成する。そのDNAをヘルパーT 細胞の持つDNAに組み込み、転写することでRNAを産出し、このRNAの一部から翻訳によりウイルス構造蛋白質が作られ、また、遺伝情報の担体として産出されたRNAを使うことでウイルスが複製される。 HIV ウイルスの持つ逆転写酵素は正確性が低く、変異が入りやすいため、様々な性質を持った変異ウイルスが生じやすい。このことがワクチン開発を困難にしている。',
          commentary: '特別講義から出題？',
        },
      ],
    },
    {
      groupTag: '2016本試',
      groupContents: [
        {
          detailInfo: '1',
          questionImg: [],
          questionSentence:
            '異化経路と同化経路を別々にとり、酵素を別にすることの生理的意義(200 字)。',
          choices: [],
          answerImg: [metabolism],
          answer:
            '同化経路と異化経路で別の酵素を用いると、片方の酵素だけを活性化し、もう片方の酵素を抑制することで、同化経路と異化経路の片方を促進、もう片方を抑制できる。これにより、その時々に応じて代謝の方向性を一方向に定めることができるという意義がある。(119字)',
          commentary:
            '例えば脂肪酸合成（同化）経路はアセチルCoA→マロニルCoA→アシルCoA→...であるのに対し、脂肪酸酸化（異化）経路は...→アシルCoA→アセチルCoAである。当然酵素も異なり、アセチルCoAやATPが多いと脂肪酸合成が促進され、脂肪酸合成が停滞しマロニルCoAが減少すると脂肪酸分解が促進される。両者が同時に促進されることはない。',
        },
        {
          detailInfo: '2',
          questionImg: [],
          questionSentence:
            '壊血病の治癒、予防としてのアスコルビン酸の生理的作用(150〜300 字)',
          choices: [],
          answerImg: [
            biochemistry2016_3_1,
            biochemistry2016_3_2,
            biochemistry2016_3_3,
          ],
          answer:
            'まず、コラーゲン繊維は3本のポリペプチドからなる三重らせん構造をしているが、各ポリペプチド鎖のリシン残基・プロリン残基は水酸化されている。この水酸基が互いに架橋構造を作ることでコラーゲン繊維は張力に強くなり、ひいては細胞外マトリックス(ECM) の強度も上がる。 ここで、リシン残基・プロリン残基の水酸化酵素の補酵素が、アスコルビン酸すなわちビタミンCであるから、アスコルビン酸はコラーゲン繊維やECMの強度を保つのに寄与している。従って、アスコルビン酸によって、ECMや皮下組織の強度が保たれ、歯肉や皮下組織の強度も保たれるので、そこからの出血も防がれ、壊血病が予防・治癒される。(291字)',
          commentary:
            'コラーゲンは様々なシグナル配列を含む前駆体（プロα鎖）の形で生成され、粗面小胞体の内腔で様々な酵素によって処理され細胞外へ分泌される。アスコルビン酸が不足するとプロリンとリシンの水酸化が不足して、コラーゲン繊維が架橋できず、線維の引っ張り強度が極端に低下し、皮下内出血などを起こす壊血病を発症する。',
        },
        {
          detailInfo: '3',
          questionImg: [],
          questionSentence: 'アセチルCoAの代謝について(200〜500 字)',
          choices: [],

          answerImg: [biochemistry2016_2],
          answer:
            'まず、アセチルCoAは、グルコース、脂肪酸、ケト原性アミノ酸、ケトン体を原料として合成される。グルコースは、解糖されてピルビン酸となり、このピルビン酸を基質としてアセ チルCoAが生成する。脂肪酸は、トリアシルグリセロール(TAG)の形で脂肪細胞に貯蔵されていたものが、分解されて血中に放出され、各組織でβ酸化を受けて多くのアセチルCoAとなる。ケト原性アミノ酸の場合は、アミノ基を転移されて残った炭素骨格からアセチルCoAが合成される。これは主に肝臓で行われる。ケトン体は、飢餓時に肝臓でアセチルCoAから合成され、血中に放出され、各組織に取り込まれて再びアセチルCoAに戻される。 これにより、ケトン体からアセチルCoAが合成される。次に、アセチルCoAを原料として、脂肪酸、ケトン体、コレステロールが合成される。脂肪酸は、エネルギー過剰時にアセチルCoAを原料として肝臓で合成される。ケトン体は、 上記のように飢餓時に肝臓でアセチルCoAから合成される。コレステロールは全身の様々な組織で合成される。最後に、アセチルCoA自体は、TCAサイクルを回ることで、CO2とH2Oに分解され、排出される。(503字)',
          commentary:
            'アセチルCoAは解糖系の最終産物ピルビン酸がミトコンドリアマトリックスへ運ばれて産生される。そのままミトコンドリアマトリックスでTCA回路→酸化的リン酸化でATP合成に利用されるが、ATPが過剰になったりインスリンが分泌されたりするとクエン酸の形で細胞外へ運ばれて脂肪酸合成の基質となる（→クエン酸シャトル）。逆にアセチルCoAが不足したり脂肪酸合成が止まったりすると脂肪酸がミトコンドリアマトリックスへ運ばれてアセチルCoAにβ酸化される（→カルニチンシャトル）。アセチルCoAはそのままではミトコンドリア内膜を通過できないが、肝臓のミトコンドリアでケトン体（アセト酢酸・3-ヒドロキシ酪酸・アセトン）の形に変換されることで細胞質→血液中→肝臓以外の組織へ移動することができ、組織内でアセチルCoAに再変換されてエネルギー源として利用できる。長期の飢餓では脳もグルコースの代わりにケトン体をエネルギー源として利用する。一部のアミノ酸もアセチルCoAへと分解される（→ケト原性アミノ酸）が、これは糖原性アミノ酸とは区別される。アセチルCoAから糖新生を行うことができないからである。',
        },
        {
          detailInfo: '4',
          questionImg: [],
          questionSentence: 'オートファジーとは何か',
          choices: [],
          answerImg: [],
          answer:
            'オートファジーとは、日本語で言うと自食作用であり、細胞が自己の古くなったオルガネラやタンパク質を分解する作用のことである。この現象は、様々な真核生物種で見られる。ちなみに、東京工業大学の大隈教授は、酵母においてオートファジーに不可欠な遺伝子を突き止め、オートファジー研究を一大分野として押し上げたことで有名である。大隈教授は、オートファジー研究における功績により、本年度のノーベル生理学・医学賞を受賞した。 さて、オートファジーの具体的なメカニズムとは、以下のようなものである。まず、リン脂 質二重膜からなる隔離膜が、細胞質のオルガネラやタンパク質を取り囲む。これにより、オートファゴソームが形成される。この段階ではまだ、内容物は分解されていない。次に、リソソーム(これは、リン脂質一重膜からなる)が、オートファゴソームの外膜と融合し、リソソームの酸性加水分解酵素が内膜と外膜の間に流入する。さらに、酸性加水分解酵素が内膜を加水分解し、リン脂質一重膜からなるファゴリソソームが形成される。このファゴリソソームにおいてはじめて、酸性加水分解酵素による内容物の加水分解が生じる。内容物は、 構成単体であるアミノ酸や単糖にまで加水分解され、有用なものは、膜のトランスポーター によってサイトゾルに輸送される。不要なものは、エキソサイトーシスで細胞外に放出される。 さらに、オートファジーの意義として、自己のオルガネラやタンパクを分解することで栄養分を作り出して飢餓状態に対処すること、折りたたみの適切でないタンパクや古くなったオルガネラを分解することで細胞内のクリーニングを行う、の2点が挙げられる。',
          commentary:
            'ユビキチン-プロテアソーム系とは異なり非選択的に分解する。分解されたアミノ酸はアミノ酸プールとしてタンパク合成の材料やエネルギー源となる。',
        },
        {
          detailInfo: '5',
          questionImg: [],
          questionSentence: 'エキソンとイントロンについてそれぞれ説明せよ',
          choices: [],
          answerImg: [
            biochemistry2016_5_1,
            biochemistry2016_5_2,
            biochemistry2016_5_3,
          ],
          answer:
            'exonはメッセンジャーRNA前駆体から成熟メッセンジャーRNAに変換される際に、スプライシングを受けて残るメッセンジャーRNA前駆体の領域に相当するDNA上の領域である。一方、intronはexonに挟まれたDNA領域で、スプライシングによって除去されるメッセンジャーRNA 前駆体の領域に相当するDNA上の領域である。',
          commentary:
            '毎年頻出。イントロンの最初と最後には特徴的な配列(Gu-AG)があり、ここを利用してスプライシングが行われる。必ずしもすべてのエキソンがスプライシングで残るわけではないことに注意→選択的スプライシング。',
        },
        {
          detailInfo: '6',
          questionImg: [],
          questionSentence:
            '（1）カルタヘナ法の目的（2）2016 年奈良医大で起こった遺伝子組み換え大腸菌流出事件の概要を説明（3）もしあなたが学長になったら、今後2のようなことが起こらないようにあなたはどう対策を取るか説明せよ',
          choices: [],
          answerImg: [],
          answer:
            '（1）カルタヘナ法の目的とは、遺伝子組み換え生物等の使用等による生物多様性への悪影響を防ぐことである。（2）この大腸菌事件とは、過去のある 3 年もの期間にわたって、奈良県立医科大学の講師が、実験に使用した遺伝子組み換え大腸菌を、カルタヘナ法で指定されている適切な方法で不活化処理せずに、そのまま下水に流していたことが発覚した、というもの。（3）遺伝子組み換え生物の不活化処理を、できるだけ一人ではなくて複数人で行うなど、ダブルチェックの体制を作らせる。また、実験者への教育を繰り返し行う。',
          commentary:
            '(1)生物多様性への悪影響を防止が必須。(2)はネットニュースでも見てください。(3)は自由に。',
        },
      ],
    },,
  ])
  const showQuestionList = () => {
    return questionList
  }
  return {
    showQuestionList,
  }
}
