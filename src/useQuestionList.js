import { useState } from 'react'
// import q1 from './img/question/220613-1.JPG'
import corePromoter from './img/answer/corePromoter.png'
import promoter from './img/answer/promotor.png'
import synthesizeCatecholamine from './img/answer/synthesizeCatecholamine.png'
import donorAcceptorSite from './img/answer/donorAcceptorSite.png'
import flankingRegion from './img/answer/flankingRegion.png'
import splicing from './img/answer/splicing.png'
import removeIntron from './img/answer/removeIntron.png'

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
          questionSentence: 'TATA box とは何？《DNA模型の008: ...tagaaa...》',
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
            'GC box とは？TATA box との違いは？《DNA模型007:..gggcgg../006:..ccgccc..》',
          choices: [],
          answerImg: [corePromoter],
          answer:
            'GC boxはgggcggの配列で、RNAポリメラーゼⅡにかかわるプロモーターのひとつであるが、TATA box（正しい位置からの適切な転写開始に必要なコアプロモーター）とは違いこれらコアモーターの活性を高める領域に分類される。',
          commentary:
            'コアモーターの活性を高める領域はほかにもCAAT boxなどが存在するが、その中でも常に（恒常的に）発現しているようなハウスキーピング遺伝子にGC boxは存在している。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'Polyadenylation signal とは？《DNA模型113~:...AATAAA...》',
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
            'splicing の donor・acceptor とは？例外は？《DNA模型020,081:gt.../071,087:...ag》',
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
