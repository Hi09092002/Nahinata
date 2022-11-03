import { useState } from 'react'
// import q1 from './img/question/220613-1.JPG'
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
            'intronはsplicingによって除去されるDNAやRNAの領域。Exonはsplicingにより結合されてmRNAとして核膜外に運ばれるDNAやRNAの領域',
          commentary:
            'さらにExonにはタンパク質に翻訳されるコーディング領域CDSと翻訳されない非翻訳領域UTRで構成されている。UTRはCDSを挟んで存在する',
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
            'GC box とは？TATA box との違いは？《DNA模型007)..gggcgg../006)..ccgccc..》',
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
            'Phenylethanolamine N-methyltransferase。stress responseで中心的な役割を果たし、心拍数や血圧を上昇させ、瞳孔を開き、血糖値の上昇をもたらすadrenalineの生合成に関与する。',
          commentary:
            'adrenalineは高峰譲吉らにより発見され、現代でも心停止・アナフィラキシーショック・敗血症・また気管支喘息時の気管支拡張薬として使用されている。睡眠時無呼吸症候群で高血圧が合併する一つの理由としてPNMTの発現上昇が考えられるようになってきている。',
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
    {
      groupTag: '実習課題',
      groupContents: [
        {
          detailInfo: '核酸1',
          questionImg: [],
          questionSentence:
            '真核生物にはどのようなRNA種があるか、それぞれのRNA種の(1)total RNAに占める割合、(2)生合成過程と細胞内局在、(3)構造上の特徴、(4)機能について述べよ。',
          choices: [],
          answerImg: [tRNA, snRNA, splicing],
          answer:
            '【リボソームrRNA】約80%。核小体でひとつながりの前駆体として転写・切断（真核生物では4種類）され、その後200か所以上の場所で修飾を受ける。リボソームとして粗面小胞体や細胞質に局在する。多数のrRNAとタンパク質が結合してリボソームという顆粒として存在するのが特徴で、翻訳時にアミノ酸がひとつずつ結合していく際のペプチド結合の形成を触媒する作用をもつ。　【転移tRNA】約15%。一本の前駆体RNAが転写された後、切断され、100種類以上の修飾を受けて完成する。グローバルリーフモデルという二次構造がさらに折りたたまれてL型の構造をとるのが特徴的。翻訳時にリボソームまでアンチコドンに対応するアミノ酸を運ぶ。　【メッセンジャーmRNA】約5%。RNAポリメラーゼⅡによって核内で生成され、5’末端にキャップ、3’末端にポリアデニル化(polyA鎖)の修飾を受け、核外のリボソームに付着しタンパク合成に関与した後、速やかに分解される。一本鎖構造が特徴的。RNAポリメラーゼによってDNAから転写されたタンパク質の配列情報をコードしている。　（核内低分子snRNA）微量。RNAポリメラーゼⅡまたはRNAポリメラーゼⅢによって転写され、核内で活動する。低分子RNAで、タンパク質のセットと常に結合して複合体を形成している。核内のmRNA前駆体のプロセシングや転写因子の調節、RNAポリメラーゼⅡの調節を行っており、プラダー・ウィリー症候群の異常領域と関連している。',
          commentary: '',
        },
        {
          detailInfo: '核酸2',
          questionImg: [],
          questionSentence:
            '一般に遺伝子情報発現の調節機構としてどのような可能性が考えられるか。また、今回の実習で検討した遺伝子についてはどのような調節を受けていると考えられるか？ハウスキーピング遺伝子と組織（細胞）特異的発現をする遺伝子について考えてみよう。',
          choices: [],
          answerImg: [flankingRegion],
          answer:
            '一般的な調節機構としてDNAのメチル化・ヒストンのリン酸化/メチル化/アセチル化などの遺伝子修飾と、リプレッサー・アクチベーター・エンハンサーサイレンサーなどによる転写調節、キャッピングの調節・スプライシング・ポリAテールの付加・配列特異的な核外輸送などによる転写後調節が挙げられる。今回の膵臓では消化酵素などを刺激に応答して生成する必要があるため、セカンドメッセンジャーによって柔軟に抑制・促進が切り替わる方式の転写調節が活発である可能性がたかい（後日詳しく調べます）',
          commentary:
            '遺伝子修飾は転写調節に比べて恒久的な遺伝子発現調節機構で、今回の場合はセカンドメッセンジャーで転写調節を行うために必要な受容体・タンパク質・酵素をコードする部分にDNA修飾がされていると考えられる。',
        },
        {
          detailInfo: '核酸3-1',
          questionImg: [],
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
          detailInfo: '核酸3-2',
          questionImg: [],
          questionSentence:
            '(2)ribosomal protein S15遺伝子について、遺伝子重複の過程とその意義を考察せよ。',
          choices: [],
          answerImg: [DNArepair],
          answer:
            '【過程】卵子細胞でmRNAからまれに逆転写され、Processed 偽遺伝子として定着する（生殖細胞として遺伝する）【意義】リボソームRNA遺伝子は通常の生育に多量の産物が必要なハウスキーピング遺伝子の一つである。',
          commentary:
            'リボソームプロテインS15は、家族性パーキンソン病原因遺伝子産物LRRK2によってリン酸化を受ける。',
        },
        {
          detailInfo: '核酸3-3',
          questionImg: [],
          questionSentence:
            '(3)遺伝子重複の過程とその意義について、一般的にどう考えるか、考察せよ。',
          choices: [],
          answerImg: [geneDuplication],
          answer:
            '遺伝子重複は遺伝的組み換えの異常・レトロトランスポゾンの転移・染色体全体の重複などによって遺伝子を含むDNA領域が重複する現象のことである。重複した遺伝子の一方は選択圧から開放されるため、変異が速やかに蓄積され、進化の重要な役割を担っていると考えられている。',
          commentary: '例：ヘモグロビン・ミオグロビンなど。',
        },
        {
          detailInfo: '酵素1',
          questionImg: [],
          questionSentence:
            '一般に酵素活性はどのようにして測定するのか？また、比活性とはどの様な概念か？',
          choices: [],
          answerImg: [],
          answer:
            '【酵素活性】経時的吸光度変化？（分光光度計で吸光度の経時変化をとらえた酵素活性測定法）【比活性】酵素試料タンパク質1mgあたりに含まれる酵素量[Unit/mg]。',
          commentary:
            '基質と生成物が何らかの方法で区別できれば酵素活性の測定が可能となる。ある条件において1分間に1μmolの基質を生成物に変えるために必要な酵素量が1Unitである。生体材料から酵素を精製するときは、比活性の増加を目安にして、「何倍に精製された」と称することが多い。',
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
      ],
    },
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
      groupTag: '20XX本試',
      groupContents: [
        {
          detailInfo: '1',
          questionImg: [],
          questionSentence:
            '胃を全摘手術した際に欠乏するビタミン、そのビタミンの欠乏により引き起こされる貧血について明確にしるし述べなさい。',
          choices: [],
          answerImg: [],
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
          answerImg: [],
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
          answerImg: [],
          answer:
            '遊離アンモニアは毒性が高いので、アミノ酸に変えて生体にとって無害な状態にした後に血流によって肝臓に運ばれる。グルコースアラニン回路はその運搬系の一つであり、主として筋肉一肝臓間でのやり取りに関わっている。まず筋肉で解糖系により生じたビルビン酸にアンモニアを付加してアラニンとし、肝臓〜輸送する。肝臓ではアミノ基転移反応によってそのアラニンからピルビン酸を再生し、アンモニアを脱離するが、それぞれアンモニアは尿素回路へ入った後に尿素として尿から排出、ピルビン酸は糖新生経路へ入ってグルコースの生成に携わる。こうしてピルビン酸からグルコースが生成され今度は肝臓から筋肉に輸送される。',
          commentary: '',
        },
        {
          detailInfo: '4',
          questionImg: [],
          questionSentence:
            '空腹時や好気的運動時には遊離脂肪酸の血中濃度が上昇すると考えられるが、その理由について肝臓と筋肉、脂肪でどのような代謝が怒っているか説明しなさい。ただしまとまりの反応は〇〇経路として良い。（500 字以内）',
          choices: [],
          answerImg: [],
          answer:
            'まず、肝臓では脂肪酸はβ酸化され、アセチル CoAが多量に作られる。作られたアセチル CoAは一部 TCA 回路に入り、大部分がケトン体の合成に使用される。ケトン体は肝臓から血中に送り出され、全身の組織のエネルギー源として利用される。筋肉では肝臓と同様に脂肪酸をβ酸化してアセチル CoA を得る。その後、アセチル CoA をTCA 回路によっCO2 まで分解し、電子伝達系と酸化的リン酸化によってエネルギーを産生する。脂肪酸はトリアシルグリセロールとして脂肪組織に貯蔵されている。空腹時や好気的運動時には、グルカゴンやアドレナリンの作用により脂肪組織でホルモン感受性リパーゼが活性化し、トリアシルグリセロールの分解が進行する。それにより得られた脂肪酸がアルブミンと結合して親水性となり、遊離脂肪酸として血中に放出されることで血中脂肪酸濃度が上昇する。この脂肪酸は筋肉と肝臓で使用される。一方、トリアシルグリセロールの分解時に同時に産生されたグリセロールは肝臓で糖新生の素材として使用される。(446字)',
          commentary:
            '空腹時の代謝を問う問題。摂食時の分も確認しておきましょう。',
        },
        {
          detailInfo: '5',
          questionImg: [],
          questionSentence:
            '解答系のNAD＋について、⑴ 赤血球ではどのようにしてNADHに再生しているのか。⑵ これらの反応を継続して行うために必要な組織とどのような経路を辿るか。',
          choices: [],
          answerImg: [],
          answer:
            '（1）赤血球にはミトコンドリアが存在しないので、酸素を還元してNADHを酸化することができない。そこで、代わりに解糖系の代謝産物であるピルビン酸を還元して乳酸にすることで、NADHを酸化してNAD+を再生している。（2）（1）で生成された乳酸を処理するために、肝臓が必要である。乳酸→ピルビン酸→オキサロ酢酸→リンゴ酸→オキサロ酢酸→ホスホエノールピルビン酸→解糖系の逆行でグルコース、の順に反応経路をたどる。',
          commentary:
            '嫌気的条件を述べる。血管の少ない組織やがん細胞、激しい運動をする骨格筋などが挙げられる。',
        },
        {
          detailInfo: '6',
          questionImg: [],
          questionSentence: 'exonとintronについて説明しなさい。',
          choices: [],
          answerImg: [],
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
          answerImg: [],
          answer:
            'DNA は相補的な二本差であり、複製に必要なDNAポリメラーゼは5’→3’の方向へしか複製を進めることができない。二本鎖のうち、3’→5’方向の鎖を鋳型にして合成される鎖は DNAポリメラーゼによる伸長方向と複製フォークの進行とが同一方向になり、5’→3’へと連続的に合成される。一方、5’→3’方向の鎖を鋳型にして合成される鎖では、岡崎フラグメントと呼ばれる短い DNA鎖が5’→3’方向に合成され、DNAリガーゼによって一本の鎖に合成される。これを半不連続的複製という。',
          commentary: '',
        },
        {
          detailInfo: '8',
          questionImg: [],
          questionSentence: 'PCR検査の原理と測定方法について述べなさい。',
          choices: [],
          answerImg: [],
          answer:
            'PCR 反応では、鋳型となる被験者のゲノム DNA 鎖と DNA ポリメラーゼ、増幅目的の領域の両末端に相補的に結合するプライマー、そして材料となる四種類のヌクレオチドを混合する。そして、これをまず 90°Cに加熱することで鉄型 DNA を変性させ一本鎖にする。次に、温度を 50°Cまで低下させてプライマーと鋳型 DNA のアニーリングを起こす。最後に、ポリメラーゼの最適温度である 70°Cまで上昇させてプライマーから DNA合成を生じさせる。以降この過程を繰り返すことでDNAの目的領域を増幅させる。PCR検査ではこの PCR 反応産物を電気泳動してバンドを観察することで、目的 DNA 領域が増幅されていたのかどうか、すなわちコロナ陽性だったのかどうかを確認する。',
          commentary:
            '実習でやったことを確認しておこう。口頭試問の勉強にもなるでしょう。',
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
