import { useState } from 'react'
// import q1 from './img/question/220613-1.JPG'
import corePromoter from './img/answer/corePromoter.png'
import promoter from './img/answer/promotor.png'
import synthesizeCatecholamine from './img/answer/synthesizeCatecholamine.png'

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
            'Exon とは？Intron とは？どんな構造上の特徴があるのか？',
          choices: [],
          answerImg: [],
          answer: '準備中',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '5’-flanking region, 3’-flanking region とは？',
          choices: [],
          answerImg: [],
          answer: '準備中',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'TATA box とは何？',
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
          questionSentence: 'GC box とは？TATA box との違いは？',
          choices: [],
          answerImg: [corePromoter],
          answer:
            'GC boxはgggcggの配列で、RNAポリメラーゼⅡにかかわるプロモーターのひとつであるが、TATA box（正しい位置からの適切な転写開始に必要なコアプロモーター）とは違いこれらコアモーターの活性を高める領域に分類される。',
          commentary:
            'コアモーターの活性を高める領域はほかにもCAAT boxなどが存在するが、その中でも常に（恒常的に）発現しているような遺伝子にGC boxは存在している。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'Polyadenylation signal とは？',
          choices: [],
          answerImg: [],
          answer: '準備中',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'splicing の donor・acceptor とは？例外は？',
          choices: [],
          answerImg: [],
          answer: '準備中',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'その他 splicing に関する塩基配列状の特徴は？',
          choices: [],
          answerImg: [],
          answer: '準備中',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'PNMT 遺伝子のコードするタンパク質の働きは？',
          choices: [],
          answerImg: [],
          answer: '準備中',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'Tyrosine を出発材料として adrenaline が作られるまでの代謝経路は？それを触媒する酵素は？',
          choices: [],
          answerImg: [synthesizeCatecholamine],
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
