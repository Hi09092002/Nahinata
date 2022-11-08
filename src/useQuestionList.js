import { useState } from 'react'

// import q1 from './img/question/220613-1.JPG'
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
      groupTag: 'DNA模型',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'Exon とは？Intron とは？どんな構造上の特徴があるのか？《DNA模型の大文字→Exon/小文字→Intronなど》',
          choices: [],
          answerImg: [flankingRegion],
          answer:
            'intronはsplicingによって除去されるDNAやRNAの領域。イントロンはGU(GT)配列で始まりAG配列で終わり、この配列はsplicingで利用される。Exonはsplicingにより結合されてmRNAとして核膜外に運ばれるDNAやRNAの領域',
          commentary:
            'さらにExonにはタンパク質に翻訳されるコーディング領域CDSと翻訳されない非翻訳領域UTRで構成されている。UTRはCDSを挟んで存在する。必ずしもすべてのExonが成熟mRNAに含まれるわけではない（→選択的スプライシング）',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '5’-flanking region とは？《DNA模型の001~009小文字領域》',
          choices: [],
          answerImg: [flankingRegion],
          answer:
            'DNAの5’末端に隣接する領域で、プロモーターやエンハンサー、サイレンサーなども含む。RNAには転写されない',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '3’-flanking region とは？《DNA模型の112~114小文字領域》',
          choices: [],
          answerImg: [flankingRegion],
          answer:
            'DNAの3’末端に隣接する領域で、RNAには転写されるが、成熟mRNAを形成する過程で取り除かれる',
          commentary: 'エンハンサーやサイレンサーも含まれる',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'TATA box とは何？《DNA模型の008)...tagaaa...》',
          choices: [],
          answerImg: [promoter],
          answer:
            'RNAポリメラーゼⅡによる転写開始位置の上流25塩基対の位置、あるいはさらに上流に存在する共通した塩基配列のこと。通常A TATA AAAのようになっており、プロモーターとよばれる',
          commentary: 'TATA boxの配列は様々な変異があっても機能する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '（TATA boxは）どんな役割を担っているの？',
          choices: [],
          answerImg: [promoter],
          answer:
            '転写因子として知られるタンパク質がこれらと結合し、転写因子がRNAポリメラーゼⅡと結合することが転写の開始に必須であり、プロモーターの中でも転写を正しい位置から開始するため誘導するコアプロモーターに分類される。',
          commentary:
            'TATA boxをもつプロモーターは、全プロモーターの10~15%あるいはそれ以下ともいわれる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'GC box とは？TATA box との違いは？《DNA模型【007】..gggcgg..【006】..ccgccc..》',
          choices: [],
          answerImg: [corePromoter],
          answer:
            'GC boxはgggcggの配列で、RNAポリメラーゼⅡにかかわるプロモーターのひとつであるが、TATA box（正しい位置からの適切な転写開始に必要なコアプロモーター）とは違いこれらコアモーターの活性を高める領域に分類される。',
          commentary:
            'コアモーターの活性を高める領域はほかにもCAAT boxなどが存在するが、その中でも常に（恒常的に）発現しているようなハウスキーピング遺伝子にGC boxは存在している。※今回のDNAではTATA boxがプロモーターとしての役割を果たしており、GC boxはエンハンサーとしての役割を担っていると考えられている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'Polyadenylation signal とは？《DNA模型113~)...AATAAA...》',
          choices: [],
          answerImg: [],
          answer:
            'polyA部位（ポリアデニル化部分）の10~30塩基上流に存在するDNA領域。ヒトの場合はほぼAAUAAA配列を含む。',
          commentary: 'ポリA鎖を形成する',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'splicing の donor・acceptor とは？例外は？《DNA模型020,081)gt.../071,087)...ag》',
          choices: [],
          answerImg: [donorAcceptorSite, removeIntron],
          answer:
            'イントロンの5’末端をdonor、3’末端をacceptorと呼び、99%以上のイントロンの5’末端がGUで3’末端がAG（GU-AG則）。RNAスプライシングの過程でこれらの部位は投げ縄構造を取ってエキソンの適切な連結を助ける',
          commentary:
            '5’-スプライス部位と3’スプライス部位はそれぞれ供与部位donor site、受容部位acceptor siteという別名がある。例外はがん細胞？',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'donor,acceptorの他に splicing に関する塩基配列状の特徴は？',
          choices: [],
          answerImg: [donorAcceptorSite, removeIntron],
          answer:
            'イントロンの3’スプライス部位の18~40塩基上流にある分枝部位は動物ではYNYYRAYとなっており、RNAスプライシングでイントロンの投げ縄構造を形成するのに重要な役割を担う。',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'PNMT 遺伝子のコードするタンパク質の働きは？',
          choices: [],
          answerImg: [],
          answer:
            'stress responseで中心的な役割を果たし、心拍数や血圧を上昇させ、瞳孔を開き、血糖値の上昇をもたらすadrenalineの生合成に関与する。PNMTはノルアドレナリン→アドレナリンの反応に関与する。',
          commentary:
            'Phenylethanolamine N-methyltransferase。adrenalineは高峰譲吉らにより発見され、現代でも心停止・アナフィラキシーショック・敗血症・また気管支喘息時の気管支拡張薬として使用されている。睡眠時無呼吸症候群で高血圧が合併する一つの理由としてPNMTの発現上昇が考えられるようになってきている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'Tyrosine を出発材料として adrenaline が作られるまでの代謝経路は？それを触媒する酵素は？',
          choices: [],
          answerImg: [synthesizeCatecholamine],
          answer: 'チロシン→L-DOPA→ドーパミン→ノルアドレナリン→アドレナリン',
          commentary:
            '酵素はチロシンヒドロキシラーゼ、ドーパデカルボキシラーゼ、ドーパミンβ-ヒドロキシラーゼ、PNMT（N-メチル化転移酵素）',
        },
      ],
    },

    // {
    //   groupTag: '実習課題',
    //   groupContents: [

    //     {
    //       detailInfo: '核酸2',
    //       questionImg: [],
    //       questionSentence:
    //         '一般に遺伝子情報発現の調節機構としてどのような可能性が考えられるか。また、今回の実習で検討した遺伝子についてはどのような調節を受けていると考えられるか？ハウスキーピング遺伝子と組織（細胞）特異的発現をする遺伝子について考えてみよう。',
    //       choices: [],
    //       answerImg: [flankingRegion],
    //       answer:
    //         '一般的な調節機構としてDNAのメチル化・ヒストンのリン酸化/メチル化/アセチル化などの遺伝子修飾と、リプレッサー・アクチベーター・エンハンサーサイレンサーなどによる転写調節、キャッピングの調節・スプライシング・ポリAテールの付加・配列特異的な核外輸送などによる転写後調節が挙げられる。今回の膵臓では消化酵素などを刺激に応答して生成する必要があるため、セカンドメッセンジャーによって柔軟に抑制・促進が切り替わる方式の転写調節が活発である可能性がたかい（後日詳しく調べます）',
    //       commentary:
    //         '遺伝子修飾は転写調節に比べて恒久的な遺伝子発現調節機構で、今回の場合はセカンドメッセンジャーで転写調節を行うために必要な受容体・タンパク質・酵素をコードする部分にDNA修飾がされていると考えられる。',
    //     }
    //     {
    //       detailInfo: '酵素1',
    //       questionImg: [],
    //       questionSentence:
    //         '一般に酵素活性はどのようにして測定するのか？また、比活性とはどの様な概念か？',
    //       choices: [],
    //       answerImg: [],
    //       answer:
    //         '【酵素活性】経時的吸光度変化？（分光光度計で吸光度の経時変化をとらえた酵素活性測定法）【比活性】酵素試料タンパク質1mgあたりに含まれる酵素量[Unit/mg]。',
    //       commentary:
    //         '基質と生成物が何らかの方法で区別できれば酵素活性の測定が可能となる。ある条件において1分間に1μmolの基質を生成物に変えるために必要な酵素量が1Unitである。生体材料から酵素を精製するときは、比活性の増加を目安にして、「何倍に精製された」と称することが多い。',
    //     },
    //     // {
    //     //   detailInfo: '',
    //     //   questionImg: [],
    //     //   questionSentence: '',
    //     //   answerImg: [],
    //     //   answer: '',
    //     //   commentary: '',
    //     // },
    //   ],
    // },
    {
      groupTag: '授業中',
      groupContents: [
        {
          detailInfo: '9/29',
          questionImg: [SFEquestion],
          questionSentence:
            '(1)解糖系の反応の 	１つの、ジヒドロキシアセトンリン酸(DHAP)のグリセルアルデヒド3-リン酸(GAP)への異性化反応についてΔG⁰（標準自由エネルギー変化）を計算してください。平衡状態では、DHAPに対するGAPの濃度の比は、0.0475(25℃,pH7.0)です。In0.0475=-3.05 (2)初めのDHAP濃度が2.0*10⁻⁴mol/L,GAPの濃度が3.0*10⁻⁶mol/Lであるとき、この異性化反応のδGを計算してください(25.0℃,pH7.0)。In0.015=-4.20',
          choices: [],
          answerImg: [standardFreeEnergy],
          answer: '(1)1805.98kal/mol (2)-0.69kcal/mol',
          commentary: 'いずれも公式参照',
        },
        {
          detailInfo: '9/29',
          questionImg: [SFEquestion2],
          questionSentence: 'スライド参照',
          choices: [],
          answerImg: [],
          answer: '-53kcal・mol⁻¹',
          commentary:
            'ΔG⁰ = -2*23.1kcal/mol/V*1.14V = -53kcal/mol ΔG⁰が負なので発エルゴン反応',
        },
        {
          detailInfo: '10/04',
          questionImg: [],
          questionSentence:
            'セカンドメッセンジャーの性質として適当でないものはどれか？',
          choices: [
            '水溶性',
            '低分子物質',
            '分解されにくい',
            '低濃度で作用を示す',
            '細胞内で産生される',
          ],
          answerImg: [],
          answer: '分解されにくい',
          commentary:
            'セカンドメッセンジャー自体は細胞内ではたらくものなので水溶性。短時間で状況は変わるので、低濃度で作用し、すぐ分解されるものが多い。',
        },
        {
          detailInfo: '10/04',
          questionImg: [],
          questionSentence: '解糖系で誤っているのはどれか',
          choices: [
            'ヒトでは赤血球以外の全ての細胞にある代謝経路',
            '酸素を必要としない',
            'ATPを産生する',
            '最終産物は乳酸、またはピルビン酸',
          ],
          answerImg: [],
          answer: 'ヒトでは赤血球以外の全ての細胞にある代謝経路',
          commentary:
            '赤血球にとって特に主要な代謝経路。酸素があるかどうかで乳酸・ピルビン酸のどちらが最終産物になるか決まる。嫌気的条件下では乳酸。',
        },
        {
          detailInfo: '10/04',
          questionImg: [],
          questionSentence: 'アイソザイムについて誤っているものはどれか',
          choices: [
            '同じ反応を触媒するが異なったタンパク質である',
            '酵素学的な性質が同じ',
            '組織による違いがある',
            '異なる遺伝子の産物である',
          ],
          answerImg: [],
          answer: '酵素学的な性質が同じ',
          commentary:
            'KmやVmaxが違ったり、フィードバック阻害されるかどうかが変わる。参考：ヘキソキナーゼ、グルコキナーゼ',
        },
        {
          detailInfo: '10/04',
          questionImg: [],
          questionSentence:
            'グルコキナーゼとヘキソキナーゼの説明で誤っているものはどれか',
          choices: [
            'グルコキナーゼとヘキソキナーゼはアイソザイムである',
            'グルコ－スをリン酸化してグルコース6-Pを産生する',
            '肝臓では主にグルコキナーゼが作用する',
            'どちらも生成物によりフィードバック阻害される',
          ],
          answerImg: [],
          answer: 'どちらも生成物によりフィードバック阻害される',
          commentary:
            'グルコキナーゼとヘキソキナーゼはアイソザイムなので生成物は同じ。グルコキナーゼはフィードバック阻害されず、グルコース濃度によって活性が決まる。',
        },
        {
          detailInfo: '10/04',
          questionImg: [],
          questionSentence: '解糖系の説明文で誤っているものはどれか',
          choices: [
            '三か所の不可逆非平衡反応が律速段階になっている',
            '不可逆反応があるため、解糖系全体は逆行できない',
            'ATPを産生するのに電子伝達系との共役を必要としない',
            '解糖系酵素の欠乏は赤血球を脆弱にする',
          ],
          answerImg: [],
          answer: '不可逆反応があるため、解糖系全体は逆行できない',
          commentary:
            '解糖系は全体としては逆行できる（糖新生）。三か所の律速段階では片方向の反応のみを触媒する酵素が存在し、解糖系と糖新生が同時に起こらないよう調節されている。',
        },
        {
          detailInfo: '10/04',
          questionImg: [],
          questionSentence: 'TCA回路について誤っているものはどれか',
          choices: [
            'アセチルCoAはTCA回路で代謝されオキサロ酢酸となる',
            '不可逆反応があるためTCA回路全体は一方向に進む',
            'ATP産生とともに反応が起こる',
            '酸素を必要とする',
          ],
          answerImg: [],
          answer: 'アセチルCoAはTCA回路で代謝されオキサロ酢酸となる',
          commentary: '',
        },
        {
          detailInfo: '10/04',
          questionImg: [],
          questionSentence: '次のs津名分で誤っているものはどれか',
          choices: [
            '血液には常に一定量のグルコースが必要である',
            '赤血球のエネルギー源はグルコースだけである',
            '空腹時のエネルギー産生のため、肝臓ではグルコースを貯蔵している',
            '摂食後まもなくはエネルギー産生のためのグルコースの供給源は食事由来である。',
          ],
          answerImg: [],
          answer:
            '空腹時のエネルギー産生のため、肝臓ではグルコースを貯蔵している',
          commentary:
            '肝臓では血糖値の維持のために、グリコーゲンで糖を貯蔵している。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'グリコーゲン代謝について誤っているものはどれか',
          choices: [
            'グリコーゲンはグルコースから構成される多糖類',
            '肝臓と筋肉に貯蔵され、どちらも血糖の維持に利用される',
            'グリコーゲン代謝に関わる多くの酵素がリン酸化によって調節される',
            '肝臓と筋肉に貯えられたグリコーゲンの合成と分解の方向性はホルモンによって調節される',
          ],
          answerImg: [],
          answer: '肝臓と筋肉に貯蔵され、どちらも血糖の維持に利用される',
          commentary:
            '筋肉に蓄えられたグリコーゲンは、血糖維持に利用されない。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'ペントースリン酸経路について誤っているのはどれか',
          choices: [
            'ペントースリン酸経路とは解糖系の側副路で、グルコース6-リン酸を代謝しATPを産生する',
            'ペントースリン酸経路で生じたリボース5-リン酸は、プリン塩基合成の最初のステップの基質になる',
            'NADPHは脂質類の還元的合成反応に使われる',
            '赤血球の安定化にはペントースリン酸経路も寄与している',
          ],
          answerImg: [],
          answer:
            'ペントースリン酸経路とは解糖系の側副路で、グルコース6-リン酸を代謝しATPを産生する',
          commentary: 'ペントースリン酸経路では、NADPHが産生される',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'カイロミクロンの説明で誤っているものはどれか',
          choices: [
            'カイロミクロンに含まれる脂肪酸は、エステルより遊離脂肪酸が多い',
            '食事由来の脂質からできているので、その構成成分として必須脂肪酸を含む。',
            'カイロミクロンは一重のリン脂質膜に覆われて親水化されている。',
            'ちいさくなったカイロミクロンは粒子そのまま肝細胞に取り込まれる。',
          ],
          answerImg: [],
          answer:
            'カイロミクロンに含まれる脂肪酸は、エステルより遊離脂肪酸が多い',
          commentary:
            'カイロミクロンの1重のリン脂質は内部が疎水性なので、カイロミクロンに蓄えられているものは疎水性のエステル主体（遊離脂肪酸は親水性）。',
        },
        {
          detailInfo: '10/31午前',
          questionImg: [],
          questionSentence:
            '22歳男性、母趾関節痛で来院。関節から吸引した滑膜液は、微生物は陰性であったが針状の尿酸塩結晶が陽性であった。重大な既住歴はなく、現在は健康。抗炎症薬の投与をうけ、炎症症状は軽快した。24時間尿と血液検査の結果から、尿酸の排出機能には異常がないことがわかった。血中尿酸値（8.5mg/dL）は高値であった。追加検査の結果PRPP合成酵素が、酵素活性が亢進するタイプであることがわかった。',
          answerImg: [],
          answer:
            '遺伝子変異によりPRPP合成酵素の活動が亢進されることによって、プリンヌクレオチド分解産物である尿酸が増え体内に蓄積されてしまっている痛風。',
          commentary:
            '参考：痛風。PRPPはヌクレオチド合成に必要な酵素（律速酵素）で、ヌクレオチド合成には大量のATPがエネルギー源として必要である。SNIPとして報告されているのではないか。',
        },
        {
          detailInfo: '10/31午前',
          questionImg: [],
          questionSentence:
            '遺伝子の核酸塩基がメチル化修飾されても影響されない反応はどれか',
          choices: [
            '制限酵素（エンドヌクレアーゼ）による遺伝子の切断',
            '複製',
            '転写',
            '次世代の細胞での転写',
          ],
          answerImg: [],
          answer: '複製',
          commentary:
            '制限酵素での切断はメチル化修飾に影響される→大腸菌などは制限酵素で外来遺伝子を処理しているが、自身の同じ配列の遺伝子はメチル化することで、制限酵素による切断を防いでいる。また、メチル化修飾は複製後の遺伝子にも行われる。',
        },
        {
          detailInfo: '10/31午前',
          questionImg: [],
          questionSentence:
            '「核酸やヌクレオチドは生体にとって重要な成分なので、食物から摂取するのが望ましい」について正しい評価はどれか',
          choices: [
            'その必要はない',
            '適量は摂取すべきである',
            '積極的に摂取すべきである',
          ],
          answerImg: [],
          answer: '適量は摂取すべきである',
          commentary:
            '色々な考え方があるが...。サプリメントは医薬品ではなく、食料品として消費者庁からのみ審査を受けているため、有効性については検証されていない。例えばコエンザイムQ10は鮭の白子から抽出されているサプリメント。食事由来の核酸はそれほど体内に吸収されないといわれているが、高尿酸血症を引き起こす原因となってしまうかもしれないので、過剰摂取は禁物。',
        },
        {
          detailInfo: '10/31',
          questionImg: [],
          questionSentence: '代謝の説明で誤っているものはどれか',
          choices: [
            '代謝とは酵素によって触媒される反応が連続して起こること',
            '酵素は反応を触媒するが反応の方向性や経路以降は変えない',
            '代謝の調節は主に酵素活性の調節によって行われる',
            '代謝経路の反応は可逆的で平衡状態になる',
            '律速段階とは、代謝経路全体の速度を決める反応である',
          ],
          answerImg: [],
          answer: '代謝経路の反応は可逆的で平衡状態になる',
          commentary:
            'どこかで不可逆的反応が含まれており、代謝は一方向に進む。',
        },
        {
          detailInfo: '10/31',
          questionImg: [],
          questionSentence:
            'プリンヌクレオチドの新規合成反応について正しいのはどれか',
          choices: [
            '最初に核酸塩基が合成され、次にリボースが結合する',
            'PRPP産生が律速段階である',
            'PRPPによって新規合成は抑制される',
            'AMPとGMPは過不足なく作られるように調節されている',
            'ATPが新たに合成される発エルゴン反応である',
          ],
          answerImg: [],
          answer: 'AMPとGMPは過不足なく作られるように調節されている',
          commentary:
            '参考：プリンヌクレオチドの新規合成経路。新規合成反応は最初にリボースが活性化される。PRPPによって新規合成は促進され、PRPPを基質とする反応が律速段階である。新規合成反応はATPをエネルギー源として大量に消費する吸エルゴン反応である。',
        },
        {
          detailInfo: '10/31',
          questionImg: [],
          questionSentence:
            '痛風治療薬アロプリノールの説明で正しいのはどれか。',
          choices: [
            '尿酸合成を促進する',
            '尿酸の排泄を促進する',
            'キサンチンやヒポキサンチンの尿中への排泄が低下する',
            'キサンチンやヒポキサンチンを酸化して尿酸に変換する酵素を競合阻害する',
          ],
          answerImg: [],
          answer:
            'キサンチンやヒポキサンチンを参加して尿酸に変換する酵素を競合阻害する',
          commentary:
            'キサンチンやヒポキサンチンと構造が似ている→競合阻害することで難溶性の尿酸への変換を防ぐ。',
        },
        {
          detailInfo: '10/31',
          questionImg: [],
          questionSentence:
            'ヌクレオチド・核酸合成の説明文で誤っているものはどれか',
          choices: [
            '過剰なヌクレオチドは細胞毒性を示すことがある',
            'プリンヌクレオチド合成の重要な中間体であるイノシン酸IMPは鰹節のうまみ成分である。',
            'UDPは他のピリミジンヌクレオチドの前駆体である',
            'DNAはRNAのリボースがデオキシリボースに還元されてできる',
          ],
          answerImg: [],
          answer: 'DNAはRNAのリボースがデオキシリボースに還元されてできる',
          commentary:
            'デオキシATP？はアポトーシスのシグナルとなる。体に重要な成分はおいしいと感じることが多い。UDPはTTPなどを合成するもととなる。リボースがデオキシリボースに還元されるのは正しいが...',
        },
        {
          detailInfo: '10/31',
          questionImg: [],
          questionSentence:
            'DNAが二本鎖であることに由来する性質ではないのはどれか',
          choices: [
            'プリン塩基とピリミジン塩基が等モル存在する',
            'AとT、GとCがそれぞれ等モル存在する',
            '紫外領域の光を吸収する',
            '加熱により紫外吸収が増加する',
            'GC含量が多いほど熱安定性が高い',
          ],
          answerImg: [],
          answer: '紫外領域の光を吸収する',
          commentary:
            '紫外線を吸収する部分は核酸塩基の部分であり、1本鎖であっても2本鎖であっても紫外線は吸収される。加熱変性は2本鎖特有。',
        },
        {
          detailInfo: '10/31',
          questionImg: [],
          questionSentence:
            'DNAポリメラーゼの反応生成物を放射性標識する場合、基質として用いるヌクレオチドのリン酸の放射性標識はどれが正しいか。【ヒント：生成した核酸に取り込まれるリン酸はどれか？】',
          choices: ['α-32P-dNTP', 'β-32P-dNTP', 'γ-32P-dNTP'],
          answerImg: [],
          answer: '準備中',
          commentary: '',
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
            '遊離アンモニアは毒性が高いので、アミノ酸に変えて生体にとって無害な状態にした後に血流によって肝臓に運ばれる。グルコースアラニン回路はその運搬系の一つであり、主として筋肉一肝臓間でのやり取りに関わっている。まず筋肉で解糖系により生じたビルビン酸にアンモニアを付加してアラニンとし、肝臓〜輸送する。肝臓ではアミノ基転移反応によってそのアラニンからピルビン酸を再生し、アンモニアを脱離するが、それぞれアンモニアは尿素回路へ入った後に尿素として尿から排出、ピルビン酸は糖新生経路へ入ってグルコースの生成に携わる。こうしてピルビン酸からグルコースが生成され今度は肝臓から筋肉に輸送される。',
          commentary: '',
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
            '脂肪細胞から血中へ放出された遊離脂肪酸は数分で肝臓や筋肉などに取り込まれる。食後のインスリン分泌によってホルモン感受性リパーゼが不活化され、血中遊離脂肪酸は減少する→脂質実習。　空腹時の代謝を問う問題。摂食時の分も確認しておきましょう。',
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
            '競合阻害剤は酵素の活性部位に可逆的に結合し、基質の結合を妨げる。競合阻害剤が存在しても最大反応速度Vmax は変化しない。一方、阻害剤の濃度を増加させると、見か けのミカエリス定数Kmは増加する。図において、阻害剤Iの非存在下および存在下でのプロットはy軸状の 1/Vmax で交わるが、阻害剤Iの存在下ではx切片の負の値が0に近づいており見かけのKmが増加したことが分かる。よって競合阻害である。(199字)',
          commentary: '',
        },
        {
          detailInfo: '4',
          questionImg: [],
          questionSentence:
            '11-cis-レチナールの生理作用と欠乏症状について、100 字以上 200 字以下で説明しな さい。',
          choices: [],
          answerImg: [biochemistry_2020_4_1, biochemistry_2020_4_2],
          answer:
            '11-cis-レチナールはビタミン A 由来の物質である。11-cis-レチナールはオプシンと結合してロドプシンとなる。このロドプシンは光を感受し視覚サイクルに関与する。そのためこの 11-cis-レチナールが欠乏すると夜盲症や眼球乾燥症といった主に眼球に関する症状がみられると言える(142字)',
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
            'DNA は逆平行の二重らせん構造をとっており、二本鎖のDNAの間に塩基の部位を内部にしまうことができるので、塩基の損失や置換による遺伝子情報の変化・損失を抑え ることができる。また複製において誤った塩基を付加された場合、相補鎖の関係からDNAポリメラーゼの持つ酵素によって除去されて正確なDNA合成が行われる。複製が正確に行われたとしても突然変異による一塩基変異が起こりうるが、相補的な塩基情報を用いるこ とで修復は可能である。これよりDNAは非常に安定しており、遺伝子情報を担う物質として適している。一方RNAは一本鎖であるため、DNAのような校正機構を持たず、変異が起こりやすい。また校正されないため変異が起こっても修復されることはなく変異は蓄積されていき、様々な性質を持つ変異ウイルスを生じやすい。コロナウイルスはプラスRNA一本鎖ウイルスとして知られている。そのためセントラルドグマにおいて転写は行われないが、DNA を遺伝子情報として持つ細胞と同じく翻訳を行い 遺伝情報の複製を行なっていく。しかし前述の通りDNAによる複製との比較よりRNAからの翻訳は不正確であり変異が非常に起こりやすい。そのため変異型ウイルスが多く現れ得る。このことは昨今の報道での変異型ウイルスや、各国のワクチン開発が遅れている原因となっていると考えられる。',
          commentary: '',
        },
        {
          detailInfo: '8',
          questionImg: [],
          questionSentence:
            'COVID-19 感染疑いの検体(唾液、咽頭ぬぐい液)のPCR検査を行う際の大まかな手順と準備物を示しなさい。(実際に行われている real-time PCR、実習で行ったゲル電気泳動法のどちらを答えてもよい。ただし、どちらを説明したか明確に すること。)',
          choices: [],
          answerImg: [],
          answer:
            'DNA は逆平行の二重らせん構造をとっており、二本鎖のDNAは相補的な塩基対間で形成される水素結合によって繋がっている。この繋がりは温度を上げることで切ることができ、これを変性という。また徐々に温度を下げていくことで水素結合が再形成されて 復元される。これらの作用を利用したのが PCR 法である。まず増幅したい領域の両端に相補的なプライマーDNA、鋳型のゲノム DNA、耐熱性を持つDNAポリメラーゼ、材料となる 4 種のヌクレオチドを混合する。そして温度を上げるとゲノムDNAは変性により一本鎖となる。その後徐々に温度を下げていくことでプライマーDNA とゲノムDNAの複製がお こる。次にDNAポリメラーゼの至適温度まで温度上昇することでプライマーからDNA合 成が起こっていく。この一連の操作を繰り返すことでプライマー間のDNAを特異的に増幅 することになる。このようにして生じた増幅断片を電気泳動にかける。そして検体において も同じようにした断片の泳動度と同じであればその断片は感染の疑いがあるといえる。こ のようにDNAの特性を使い PCR 法は行われる。',
          commentary: '実習、ちゃんと勉強しよう。',
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
            '電子伝達系で遊離したエネルギーは H+の電気化学ポテンシャルに変換され、 ATP 合成酵素はこのH+駆 動力を利用して ATP 合成を行う、という説。すべての生命に普遍的な生体エネルギー変換の原理を説明でき、ATP 合成のために、物質(高エネルギー中間体)を一々使う必要がなく、ATP合成を持続的に行える。',
          commentary: '',
        },
        {
          detailInfo: '3',
          questionImg: [],
          questionSentence:
            'PIP2(ホスファチジルイノシトール 4,5 ビスリン酸)のシグナル伝達について説明せよ。',
          choices: [],
          answerImg: [
            biochemistry2019_3_1,
            biochemistry2019_3_2,
            biochemistry2019_3_3,
          ],
          answer:
            'ホルモンが GPCR に特異的に結合すると、G タンパク質の α サブユニットの GDP-GTP 交換反応が起こる。活性化したαサブユニットは PLC を活性化し、活性化した PLC は PIP2 を DG(ジアシルグリセロール)と IP3(イノシトール 1,4,5-トリスリン酸)に切断する。細胞膜に残った DG は PKC を活性化する。また、IP3 が小胞体の IP3 依存性 Ca2+チャネルに結合して Ca2+を 細胞質内に大量に放出させ、その Ca2+も PKC を活性化させる。活性化された PKC がタンパク質をリン酸化することで、細胞内応答が起こる。',
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
          commentary: '',
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
            'コレステロールはHDLにもLDLにも存在する。TAGはキロミクロンやLDLには含まれるがHDLにはほとんど含まれない。',
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
            '水溶性ホルモンの受容体は細胞膜にある一方で、標的となるタンパク質は細胞質にある。この間を埋める細胞内シグナル伝達としての働きと、少ない刺激伝達でも増幅して十分な応答を誘導する働きの2点。',
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
    },
    {
      groupTag: '実習-核酸',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習1日目、採集した血液1~1.5mLを20mLのTE溶液に加えた。このTE溶液には10mM Tris-HCl(pH 8.0)と1mM EDTAが含まれている。EDTAが入っている理由は？',
          answerImg: [coagulation],
          answer:
            'EDTAはCa²⁺のキレート剤で、血液凝固反応に必須のCa²⁺を除去するはたらきがある。',
          commentary:
            'EDTA(エチレンジアミン四酢酸)のほかにクエン酸ナトリウムもCa²⁺のキレート剤。ワーファリンは肝臓でビタミンKに拮抗することで抗凝固作用を示す。ヘパリンはアンチトロンビンⅢを活性化することで抗凝固作用を示す',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習1日目。遠心後のDNA溶液にProteinase K入りのK bufferを加え、56℃で45分間インキュベートした。この時間に何が起こっているか、なぜ56℃なのか？',
          answerImg: [],
          answer:
            '一般的な酵素は体温前後で活性をもつ事が多く、リソソームに含まれる核酸分解酵素も37℃前後で活性をもつが、Proteinase Kは56℃で活性が最大となり、精製したDNAを分解することなくタンパク質を分解することができる。',
          commentary:
            'Proteinase K関連は頻出。プロテインアーゼKは非特異的にタンパク質を加水分解するため、DNAに結合しているヒストンなどのタンパク質や、リソソーム内の酵素群も分解・失活させることができる。常温で保存可能。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習1日目。56℃で45分間Proteinase Kを活動させた後、DNA溶液を95℃で10分間インキュベートした。この時間に何を行っているか？',
          answerImg: [],
          answer:
            'Proteinase Kを失活させている。活性が残っているとこの後のPCR反応で使う酵素が分解されてしまう。',
          commentary:
            '95℃下ではDNAも熱変性を起こすが、温度を下げれば元に戻る。',
        },
        {
          detailInfo: '課題1',
          questionImg: [],
          questionSentence:
            '真核生物にはどのようなRNA種があるか、それぞれのRNA種の(1)total RNAに占める割合、(2)生合成過程と細胞内局在、(3)構造上の特徴、(4)機能について述べよ。',
          answerImg: [tRNA, snRNA, splicing],
          answer:
            '【リボソーム/rRNA】約80%。核小体でひとつながりの前駆体として転写・切断（真核生物では4種類）され、その後200か所以上の場所で修飾を受ける。リボソームとして粗面小胞体や細胞質に局在する。多数のrRNAとタンパク質が結合してリボソームという顆粒として存在するのが特徴で、翻訳時にアミノ酸がひとつずつ結合していく際のペプチド結合の形成を触媒する作用をもつ。　【転移/tRNA】約15%。一本の前駆体RNAが転写された後、切断され、100種類以上の修飾を受けて完成する。グローバルリーフモデルという二次構造がさらに折りたたまれてL型の構造をとるのが特徴的。翻訳時にリボソームまでアンチコドンに対応するアミノ酸を運ぶ。　【メッセンジャー/mRNA】約5%。RNAポリメラーゼⅡによって核内で生成され、5’末端にキャップ、3’末端にポリアデニル化(polyA鎖)の修飾を受け、核外のリボソームに付着しタンパク合成に関与した後、速やかに分解される。一本鎖構造が特徴的。RNAポリメラーゼによってDNAから転写されたタンパク質の配列情報をコードしている。',
          commentary: '',
        },

        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習1日目。精製したRNAを分光光度計で定量する。260nm付近の波の形を調べるのはなぜか。260nm付近の吸光度でRNA以外に何が測定されうるか？',
          answerImg: [],
          answer:
            'ATP(259nm)、タンパク質(約280nm)が混ざっていないことを調べるため。',
          commentary:
            'DNAは同じ260nmであるため、混ざっていたとしても調べることができない。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習2日目、抽出したRNAから逆転写酵素によってcDNAを合成した。このcDNAとは何か。また、なぜRNAはPCRで増幅できないのか。',
          answerImg: [],
          answer:
            'complementary DNA(DNAの相補鎖)。RNAはDNAとは異なり1本鎖であるため。',
          commentary:
            'cDNAはmRNAに対応する塩基配列であるため、イントロンが含まれておらず、転写調節の影響を受ける。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習2日目、抽出したRNAから逆転写酵素によってcDNAを合成した。このときプライマーはどういった種類のものを使ったか、Oligo dT primerとの違いは何か。',
          answerImg: [oligoDTprimer],
          answer:
            'Random primer。ランダムな6個の塩基配列をもったオリゴヌクレオチド。ポリAテールに特異的であるオリゴdTプライマーと違って、mRNAだけでなく様々なRNAの一部分を逆転写することができる。',
          commentary:
            '例えばヒストンタンパク質をコードするmRNAはポリAを持っていない。ランダムプライマーは検出範囲は広いが、RNAに対するプライマーの濃度を厳密に調節しないと狙った結果を出すことが難しい。今回の実験では、RNAに対してプライマーの量が多すぎて、短いcDNAばかりとなり、AST1のcDNAを増幅させて検出することができなかった。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習2日目、抽出したRNAから逆転写酵素によってcDNAを合成した。この逆転写反応では逆転写酵素の他にRNAse inhibitorを加えたが、RNAse inhibitorとは何か。',
          answerImg: [],
          answer:
            'RNA分解酵素阻害剤。鋳型であるRNAを壊さないために加える。RNAseは比較的細胞内のどこにでも存在している。',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習2日目。PCRによってinsulin・ribosomal protein S15（とAST1）遺伝子の一部を増幅した。PCRとは何の略称か。また、PCR反応で必要なものは何か。',
          answerImg: [],
          answer:
            'Polymerase Chain Reaction。必要になるのはDNA、プライマー、dNTP混合液、DNAポリメラーゼ。',
          commentary:
            'PCRで増幅することで少ない試料からでも十分量のDNAを得ることができる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習2日目。PCRや逆転写反応で使ったdNTP溶液とは何か',
          answerImg: [DNAsynthesize],
          answer:
            'dATP/dGTP/dCTP/dTTP(TTP)のmix。DNA合成で必要なヌクレオチド + 高エネルギーリン酸結合2個',
          commentary: 'デオキシリボース(d) + 塩基A/T/G/C + リン酸3個(TP)',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習2日目。PCRによってinsulin・ribosomal protein S15（とAST1）遺伝子の一部を増幅した。PCRの仕組みを簡潔に説明せよ。',
          answerImg: [],
          answer:
            '(1)熱変性によって水素結合を壊してDNAを1本鎖にする。(2)1本鎖DNAにプライマーを結合（アニーリング）させる。(3)DNAポリメラーゼによる伸長反応を進める　(4)(1)~(3)を25~30回繰り返す。',
          commentary:
            '高温下でも失活しないDNAポリメラーゼ（高度好熱菌由来）を用いる。通常のDNAポリメラーゼを用いてしまうと1サイクルごとに失活するDNAポリメラーゼを補わなければいけなくなる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習3日目、アガロースゲルで電気泳動を行った。アガロースゲルとは何か。また、アガロースゲルで電気泳動することによってどのようなことがわかるか。',
          answerImg: [electrophoresisDNA],
          answer:
            'アガロースゲルとは寒天（多糖類）のゲルのことで、分子量が大きいほど通り抜けにくくなることを利用して、DNAの分子量の分布を調べることができる。',
          commentary:
            'タンパク質とは異なり、DNAには負電荷を帯びたリン酸基が含まれるため、常に負の電荷を帯びている。よってそのまま電気泳動しても陽極に引き寄せられる。アガロースの濃度を変えることで計測できる分子量の範囲を変えることができる（もっと分子量の大きなものを電気泳動させたいときはアガロースの濃度を下げる）。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習3日目、アガロースゲルで電気泳動を行った。電気泳動用のbufferとしてLoading Bufferを加えたが、この目的を2つ挙げよ',
          answerImg: [],
          answer:
            '(1)サンプルに色を付けて確認しやすくする　(2)比重を水より重くしてゲル内に入りやすくする',
          commentary:
            'Loading buf.は分子量が小さく負に帯電しているため、電気泳動を止める時間の目安になる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '実習3日目、アガロースゲルで電気泳動を行った。このときアガロースゲルにGelRedなどのインカレーターを含めた意義を答えよ。',
          answerImg: [],
          answer:
            'GelRedにはDNAの二重らせん構造に入り込んで紫外線照射で発光する色素が含まれており、これを用いてDNAの分布を調べるため。',
          commentary:
            'Loading buf.はDNAと結合していないため電気泳動結果を調べることができない。色素をアガロースゲルに含めることで電気泳動していない（例えば浮いている）DNAは光らなくなる。',
        },
        {
          detailInfo: '',
          questionImg: [insulinGene],
          questionSentence:
            '実習3日目。アガロースゲルで電気泳動を行った結果、genomic DNAからinsulinに相当するDNAが2本のバンドとして出てきた。これはどういうことなのか、説明せよ。',
          answerImg: [],
          answer:
            'insulin2の遺伝子はイントロンを含んだ配列、insulin1遺伝子はイントロンを含まない配列であり、それぞれ分子量が異なるから。',
          commentary:
            '膵臓cDNAではmRNA成熟過程でスプライシングが行われるため、insulin2由来であったとしてもcDNAの配列にイントロンは含まれない→膵臓cDNAのバンドは1本。',
        },
        {
          detailInfo: '課題3-1',
          questionImg: [insulinGene],
          questionSentence:
            '(1)insulin 遺伝子について、遺伝子重複の過程とその意義を考察せよ。',
          choices: [],
          answerImg: [],
          answer:
            '【過程】遺伝子重複により、偽遺伝子として複数存在する。【意義】インスリンは生命に重要なホルモンである',
          commentary:
            'インスリンは遺伝子領域が2か所存在するが、実験でPCR増幅する部分には片方（type1）しかイントロン領域が存在しないので、シーケンス→電気泳動の結果によって区別できる',
        },
        {
          detailInfo: '課題3-2',
          questionImg: [S15Gene],
          questionSentence:
            '(2)ribosomal protein S15遺伝子について、遺伝子重複の過程とその意義を考察せよ。',
          answerImg: [DNArepair],
          answer:
            '【過程】卵子細胞でmRNAからまれに逆転写され、Processed 偽遺伝子として定着する（生殖細胞として遺伝する）【意義】リボソームRNA遺伝子は通常の生育に常時多量の産物が必要なハウスキーピング遺伝子の一つである。',
          commentary:
            '人体では逆転写はごくまれにしか起こらないが、卵子細胞は存在期間が非常に長いので起こり得る。ribosomal protein S15 遺伝子は卵子細胞でも発現している。偽遺伝子は転写に関わる非翻訳領域をもたないので、通常は役割をもたない。',
        },
        {
          detailInfo: '課題3-3',
          questionImg: [],
          questionSentence:
            '(3)遺伝子重複の過程とその意義について、一般的にどう考えるか、考察せよ。',
          choices: [],
          answerImg: [geneDuplication],
          answer:
            '遺伝子重複は遺伝的組み換えの異常・レトロトランスポゾンの転移・染色体全体の重複などによって遺伝子を含むDNA領域が重複する現象のことである。重複した遺伝子の一方は選択圧から開放されるため、変異が速やかに蓄積され、進化の重要な役割を担っていると考えられている。',
          commentary:
            'そのほか、哺乳動物では遺伝子増幅はいくつかの疾患や薬剤に対する応答としてみられることがある。例えばメトトレキサートに対する薬物耐性を獲得する過程で遺伝子コピー数の増加が確認されている。',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '実習-イムノブロット',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'SDS-PAGEとは何か。タンパク質を電気泳動するために何を行っているのか。',
          answerImg: [SDSMicelle],
          answer:
            'SDS-PAGEとは、酸性の界面活性剤であるSDSでタンパク質に一定の負電荷を付加した後で、ゲル電気泳動を行う方法。タンパク質固有の電荷に関係なく分子ふるいの原理に依存したゲル電気泳動を行うことができる。',
          commentary:
            'SDS-PAGE:Sodium Dodecyl Sulfate Polyacrylamide Gel Electrophoresis。タンパク質と異なり核酸（DNA/RNAなど）はそれ自身がもつリン酸基が負の電荷を有しているので、SDSを添加する必要がない。',
        },
        //         {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: 'ブロッティング(Blotting)とは何か。',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'SDS-PAGEの結果、バンドはどのように出たか。バンドがきれいに出なかった場合、どのような処置を行ったか。',
          answerImg: [],
          answer:
            '暗室で蛍光するバンドをX線フィルムに現像しようとしたが、あまりはっきりと映らなかった。その後免疫染色によって位置関係を確認した。AST1に相当するバンドの他、その2量体や別の長さのバンドも確認できた。',
          commentary:
            '大腸菌を用いて精製したASTとF4画分のSDS-PAGEの結果を比べることで、分子量の観点からASTの存在を確認できる実験。（酵素の実験では活性の観点からASTの存在を確認しようとした）バンドがぼやけるのはモノクローナル抗体を使ったため（ASTのランダムな一部分と配列が同じなら抗体が結合してしまう）。',
        },
        {
          detailInfo: 'レポート1日目',
          questionImg: [],
          questionSentence:
            '今回使用したプレート上で大腸菌が生育するために必要な遺伝子は何か。また、その理由は何か',
          answerImg: [plasmid],
          answer:
            'ペニシリン系抗生物質の分解酵素β-lactamaseをコードするAmp(R)遺伝子。培地にアンピシリンが含まれていて、通常では増殖することができないため。',
          commentary:
            'プラスミドが導入されていない大腸菌も死滅するわけではないため、導入大腸菌がアンピシリンを分解した後遅れてコロニーを形成することがある。',
        },
        {
          detailInfo: 'レポート1日目',
          questionImg: [],
          questionSentence:
            'プレート上で色の異なる（青色の）コロニーが出現した理由は何か。',
          answerImg: [Xgal, plasmid, lacZ],
          answer:
            '今回導入するpBluescriptSK(-)プラスミドにはlacZ-α断片が、大腸菌にはlacZ-ω断片が含まれている。これら両方がそろうことで活性をもったβガラクトシダーゼが生成され、X-galが分解・酸化縮合し青色色素ブロモクロロインジゴを生成した。一方pBluescriptSK(-)-ASTプラスミドではlacZ-α領域の途中のMCS領域をEcoRIで切断し終止コドンを含むAST1遺伝子をTAクローニング法で導入しているため、lacZ-α断片が完全な形で生成されず、X-galから青色色素を生成しない。',
          commentary:
            'AST1が導入されていると終止コドンによってlacZ-α遺伝子は大部分が翻訳されない。これによって、AST1が導入されたかどうかを視覚的に確認することができる。（アンピシリン耐性遺伝子AmpRとは導入経路が異なるため、どちらも確認する必要がある。）',
        },
        {
          detailInfo: 'レポート1日目',
          questionImg: [],
          questionSentence: 'IPTGが寒天プレートに含まれている理由はなにか。',
          answerImg: [operon],
          answer:
            'プラスミド導入大腸菌はlacリプレッサーを過剰発現しており、ASTの発現が抑制されている。培地に添加されたIPTGがlacリプレッサーと結合することによって、リプレッサーがはずれ、lacオペロンの転写の抑制が解除されるため。',
          commentary:
            'lacZ-α遺伝子は、大腸菌ラクトースオペロンのlacプロモーター由来のプロモーターの支配下にあり、βガラクトシド（およびその誘導体IPTGなど）によって転写活性が上昇する。自然界では、lacオペロンは大腸菌のエネルギー源であるグルコースが存在せず、ラクトースを利用できる場合に産生される。外来遺伝子産物は、宿主の増殖に悪影響を及ぼす恐れがあるため、増殖が十分進むまで発現を制御しておく必要がある。IPTGはアロラクトースの類似体。',
        },
        {
          detailInfo: 'レポート1日目',
          questionImg: [],
          questionSentence:
            'AST1の予想される分子量は何kDa程度か。（アミノ酸の平均分子量は110Daとして計算する）また、その根拠は何か。',
          answerImg: [introducedAST1],
          answer: '約50.6kDa',
          commentary:
            'lacZ由来119bp + TAクローニングによる1bp + AST1の5’非翻訳領域21bp =total141bp →47アミノ酸分だけ野生型ASTに比べて大きくなる。野生型AST1は413アミノ酸なので、大腸菌から生成されるAST1の分子量は合計460アミノ酸→50600Daに相当する。数値的には分子量に等しいが、厳密にはDa(Dalton)は分子量の単位ではない。',
        },
        {
          detailInfo: 'レポート2日目',
          questionImg: [],
          questionSentence:
            'イムノブロットのシグナルが検出されたのはどのサンプルか。また、シグナルの位置・強度にはどのような関係が認められたか。',
          answerImg: [],
          answer:
            '簡略に：F1画分・F2画分ではASTに相当するバンドが薄く出現。F4画分ではバンドが濃く出現し二量体も検出。AST導入大腸菌からは組換えASTに相当するバンドが出現。AST導入してない大腸菌からは該当バンドが出現せず。　※組換えASTのバンドはラットから抽出したASTバンドに比べて約5kDa長い',
          commentary:
            'これによってAST1だと思われる抽出物が、AST1に対応する塩基配列から合成された正真正銘のAST1と同じくらいの分子量であることを確認できた。→酵素実習ではAST1のような作用を持つタンパク質を抽出できただけで、本当にAST1である確認が不十分であった。例えばミトコンドリアには同じ作用をもつが分子量が小さい（約30kDa?）AST2が存在する。',
        },
        {
          detailInfo: 'レポート2日目',
          questionImg: [],
          questionSentence:
            '第1日目に予想したAST1の推定分子量とイムノブロットのシグナルから推定された分子量について比較し、差異がある場合にはその理由を考察しなさい。',
          answerImg: [SDSMicelle],
          answer:
            '※同じくらいの結果が出なかった場合は、(1)SDS-PAGEの性質上電荷を多く含むタンパク質に対して分子量を測定するのが不得意　(2)アミノ酸の平均分子量を110Daとした仮定による誤差　が考えられる。',
          commentary:
            '例えばヒストンタンパク質は、DNAと結合するため強い正電荷を帯びており、これがSDSの負電荷を打ち消すことで、分子量以上に電気泳動で流れにくい→実際より大きな分子量として測定されてしまう。',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '実習-SNP',
      groupContents: [
        {
          detailInfo: '課題1',
          questionImg: [],
          questionSentence:
            '制限酵素が認識する塩基配列は6~8塩基程度のものが多く、ある制限酵素が発現している細菌自身のDNA鎖の中にもその認識配列は存在する。では、この細菌のDNA鎖が自身の制限酵素で切断・破壊されることはないのだろうか？',
          answerImg: [],
          answer:
            'メチル化などで自身のDNAを修飾することによって、切断を免れている。',
          commentary:
            '例えば大腸菌は自身のDNAをメチル化することによって、外来DNAを区別して分解する。',
        },
        {
          detailInfo: '課題2',
          questionImg: [],
          questionSentence:
            '「isoschizomer」とは何だろう？「Bst DEI」「Hpy F31」は「Dde I」のisoschizomerであるが...',
          answerImg: [],
          answer:
            'isoschizomerは同じ配列を認識する制限酵素のことで、同じ形の切断端を作る。',
          commentary: '',
        },
        {
          detailInfo: '課題3',
          questionImg: [],
          questionSentence:
            '核酸の電気泳動ではDNAはどちらに( + OR - )泳動されるだろうか、それはなぜだろうか。また、タンパク質の場合は？',
          answerImg: [],
          answer:
            'タンパク質とは異なり、DNAには負電荷を帯びたリン酸基が含まれるため、常に負の電荷を帯びている。よってそのまま電気泳動しても陽極に引き寄せられる。',
          commentary:
            'タンパク質ではSDSで負電荷を付加して電気泳動を行った→イムノブロット/SDS-PAGE',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
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
