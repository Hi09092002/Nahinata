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
            '肝臓では血糖値の維持のために、グリコーゲンで糖を貯蔵している。？',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '糖新生について誤っているものはどれか',
          choices: [
            '血糖値を維持するために主に肝臓で行われる代謝経路',
            'インスリンにより促進される',
            'アミノ酸・乳酸・～～',
            '～～～',
          ],
          answerImg: [],
          answer: 'インスリンにより促進される',
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
