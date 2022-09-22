import { useState } from 'react'

export const useTechnicalTerm = () => {
  const [technicalTerm, setTechnicalTerm] = useState([
    // term[0]が代表名として大きく表示される。
    {
      term: ['血液抗凝固剤', 'EDTA', 'クエン酸ナトリウム', 'ヘパリン'],
      explanation:
        'EDTAとクエン酸ナトリウムは血中のカルシウムを除去することで、ヘパリンはアンチトロンビンのトロンビン抑制作用を増強することで血液が凝固することを防ぐ',
    },
    {
      term: [
        '平均赤血球容積',
        'mean corpuscular volume',
        'MCV',
        '大球性',
        '小球性',
      ],
      explanation:
        'Ht/赤血球数。正常例は45/5*10^6で、大きいと大球性、小さいと小球性',
    },
    {
      term: [
        '平均ヘモグロビン含有量',
        'mean corpuscular Hb',
        'MCH',
        '高色素',
        '低色素',
      ],
      explanation:
        'Hb値/赤血球数。正常例は16/5*10^6で、大きいと高色素性、小さいと低色素性',
    },
    {
      term: [
        '平均赤血球ヘモグロビン濃度',
        'mean corpuscular Hb concentration',
        'MCHC',
        '低飽和',
        '高飽和',
      ],
      explanation:
        'Hb値/Ht。正常例は16/45で、大きいと高飽和性、小さいと低飽和性',
    },
    {
      term: ['Crush症候群', 'クラッシュ症候群', '挫滅症候群'],
      explanation:
        '筋細胞の壊死などで筋肉組織内のカリウムやミオグロビンなどが急激に血中に供給されると、カリウムイオンが致死的不整脈→心停止を招き、ミオグロビンが尿細管を閉鎖することで急性腎不全や尿毒症を引き起こす。阪神淡路大震災で注目される。「がれきの中の医療」',
    },
    {
      term: ['アドレナリン', 'adrenaline', 'エピネフリン', 'epinephrine'],
      explanation:
        'カテコールアミンの一種で、チロシン→L-ドーパ→ドーパミン→ノルアドレナリン→アドレナリンの経路で合成される。ノルアドレナリンまでは交感神経節後線維や脳でも合成されるが、アドレナリンへの変換は副腎髄質にのみ分布するPNMTが必須。',
    },
    {
      term: ['強心配糖体', 'ウワバイン'],
      explanation:
        '植物から取れる強力な心収縮力増強薬で、Na⁺-K⁺ ATPaseを阻害することで細胞内Na⁺濃度を上昇させる。Na⁺-Ca²⁺ exchangerの活動が遅れた心筋は細胞内Ca²⁺濃度が上昇し収縮力が上昇する',
    },
    {
      term: ['増幅単極肢誘導', 'aVR', 'aVL', 'aVF'],
      explanation:
        '不関電極（電位0）を疑似的に体の中心(Wilsonの中心点)に作り、そこから右手(aVR)、左手(aVL)、左脚(aVF)方向の電位を記録する心電図の誘導法',
    },
    {
      term: ['単極胸部誘導', 'V₁', 'V₂', 'V₃', 'V₄', 'V₅', 'V₆'],
      explanation:
        '不関電極（電位0）を疑似的に体の中心(Wilsonの中心点)に作り、そこから胸部前面（V₁が正中右側～V₆が左側）の方向の電位を記録する心電図の誘導法。V₁~V₂:右室～心室中隔付近、V₃~V₄:左室前壁・心尖部、V₅~V₆:左室側壁',
    },
    {
      term: ['起坐呼吸'],
      explanation:
        '起坐位または半坐位で、やや心臓の位置を高くすることで右心系への静脈還流を減らす呼吸方法',
    },
    {
      term: ['ネフローゼ症候群', '低蛋白血症'],
      explanation:
        '尿に蛋白が流出した結果血中蛋白が減り（低蛋白血症）、むくみ（浮腫）が生じる疾患',
    },
    {
      term: ['アンジオテンシン', 'アンギオテンシン', 'レニン'],
      explanation:
        'アンジオテンシノーゲンは肝臓で合成されるタンパク質で、腎臓輸入細動脈の顆粒細胞由来のレニンによりアンジオテンシンⅠに分解される。さらに血管内皮細胞から放出されるアンジオテンシン変換酵素ACEのはたらきでアンジオテンシンⅡに変換されると、強い血管平滑筋収縮作用で血圧を上げる。',
    },
    {
      term: ['ジアシルグリセロール', 'DG'],
      explanation:
        'ホスホリパーゼC:PLCによって細胞膜のPIP₂→DG+IP₃（イノシトール3リン酸）で作られる。DGはCキナーゼを活性化し、電位依存性Ca²⁺チャネルを活性化することで血管平滑筋収縮に関与する。',
    },
    {
      term: ['イノシトール三リン酸', 'IP₃'],
      explanation:
        'ホスホリパーゼC:PLCによって細胞膜のPIP₂→DG（ジアシルグリセロール）+IP₃で作られる。IP₃は筋小胞体にあるCa²⁺チャネルのIP₃受容体に結合して開口させ、血管平滑筋収縮に関与する',
    },
    {
      term: ['一酸化窒素', 'NO', 'ニトログリセリン'],
      explanation:
        'アドレナリンβ₃受容体やアセチルコリン受容体からの刺激を受けた血管内皮細胞によって産生され、血管を弛緩させる。狭心症に対する薬としてニトログリセリンがあり、NOが血管を拡張させる作用を利用している（舌下投与）。',
    },
    {
      term: ['スターリングの心臓の法則', 'スターリング', 'Frank-Starling'],
      explanation:
        '心筋は伸びた状態の時ほど収縮力が増す特徴があり、心室の充満度に伴って心室筋の収縮力（1回の拍出量）が変化するという法則。この法則には神経は関与しない',
    },
    {
      term: ['ベインブリッジ反射', 'Bainbridge reflex', 'ベインブリッジ'],
      explanation:
        '静脈還流量が増加し心臓の伸展受容器が引き延ばされ興奮すると、迷走神経→血管運動中枢（延髄）→交感神経の経路で心臓の収縮力（1回の拍出量）が増加する。スターリングの法則と並ぶ心拍出量の自動調節機構。',
    },
    {
      term: [
        '心房性ナトリウム利尿ペプチド',
        'ANP',
        'atrial natriuretic peptide',
      ],
      explanation:
        '心房から放出され腎臓に働きかけ尿中へのNa⁺排出を促進する。心房筋が伸展すると放出され、血圧を下げ体液量を減らすことによって心臓への負担を減らす。レニン-アンジオテンシン-アルドステロン系の作用による過度のNa⁺貯留に拮抗する',
    },
    {
      term: [
        'レニン-アンジオテンシン-アルドステロン系',
        'アルドステロン',
        'aldosterone',
        '鉱質コルチコイド',
      ],
      explanation:
        'アルドステロンは副腎皮質球状帯から分泌される鉱質コルチコイドの一種で、腎臓集合管でのNa⁺再吸収を促進し、細胞外液量（血液量）を増加させる。腎臓輸入細動脈壁の顆粒細胞から分泌されるレニンによって制御される。',
    },

    {
      term: ['エンハンサー', 'Enhancer'],
      explanation:
        '遺伝子の転写量を増加させる作用をもつDNA領域のことをいう。プロモーターからの距離や位置、方向に関係なく働く。遺伝子の転写を調節するDNA領域はサイレンサーとよばれる。',
    },
    {
      term: ['ポリアデニル化', 'polyadenylation'],
      explanation:
        'RNAの3’末端を多数のアデニンA塩基（→ポリA鎖）で伸長することをポリアデニル化という。真核生物では、ポリアデニル化は翻訳可能な成熟mRNAを生産するため不可欠であり、広い意味では遺伝子発現過程の一部であるといえる。',
    },
    {
      term: ['ポリA鎖', 'poly-A tail', 'ポリA'],
      explanation:
        'RNAの3’末端に伸長された多数のAMP（アデニン塩基）成熟mRNAに必須であり、mRNAの安定性に関わる。時間とともに短くなり、十分に短くなった時点でmRNAは酵素により分解される。',
    },
    {
      term: ['セレノシステイン', 'Sec'],
      explanation:
        '21番目のアミノ酸。セレンSeは必須微量元素。Secを含むタンパク質（セレノプロテイン）は主に酸化還元反応を担い、欠乏すると貧血・高血圧・関節炎など/過剰摂取すると中毒を引き起こす。対応するアミノアシルtRNA合成酵素がないため、セリンのtRNA合成酵素を流用してその後変換される。',
    },
    {
      term: ['Edman分解法', 'フェニルイソチオシアネート'],
      explanation:
        'アミノ酸配列の決定法。フェニルイソチオシアネートによりN末端のアミノ酸を1つずつ切断可能。',
    },
    {
      term: ['MALDI', 'マトリックス介助レーザーデソープションイオン化法'],
      explanation:
        'タンパク質をマトリックスとして混合し、レーザー光を当てる事でイオン化する手法。タンパク質を質量分析によってアミノ配列決定するために利用される。',
    },
    {
      term: ['ペプチドマスフィンガープリンティング法'],
      explanation:
        'トリプシンでタンパク質を断片化し、全ての断片質量を測定することでタンパク質のアミノ酸配列を同定する手法。',
    },
    {
      term: ['メチオニン', 'Met'],
      explanation: 'AUG/ATGで翻訳されるアミノ酸。翻訳開始時に必ず合成される',
    },
    {
      term: ['αヘリックス', 'α-Herix'],
      explanation:
        'タンパク質の二次構造の一つ。3.6個で1回転の右巻きらせん状。ケラチンやミオグロビンに豊富。主鎖がらせんを巻くので側鎖がらせん外に突き出ている。プロリンが存在する部位でαヘリックスが終わる。',
    },
    {
      term: ['βベント'],
      explanation:
        'ポリペプチド鎖の方向を反転させる、折れ曲がりの部分。構造は水素結合で固定されており、2番目にプロリン、4番目がグリシンである事が多い、',
    },
    {
      term: ['zinc finger', 'ジンクフィンガー', 'zinc'],
      explanation:
        'ドメインのひとつ。亜鉛Znがピンセットのようになっていて、DNA結合タンパク質にみられるDNAに結合する部分。',
    },
    {
      term: ['ミオグロビン', 'myoglobin'],
      explanation:
        '心筋と骨格筋に存在する球状タンパク質。酸素の貯蔵・細胞内での酸素の輸送を担う。1本のポリペプチド鎖。赤血球のヘモグロビンより酸素結合度が高く、アロステリック効果なし。',
    },
    {
      term: ['シャペロン', 'Chaperone'],
      explanation:
        'タンパク質の折り畳みを助ける酵素。形が豊富で、対象のタンパク質全体をシャペロン内部に遮蔽するものもある。ATPで動作する。',
    },
    {
      term: ['アルツハイマー病', '認知症', 'アミロイドβ'],
      explanation:
        '老年期の認知症で、大脳皮質における神経細胞の脱落（脳神経細胞の構造変化；神経減線維変化）が原因。アミロイドβ（Aβ）の蓄積を早期発見する研究が続けられている。',
    },
    {
      term: ['プリオン病', 'TSE', '感染性海綿状脳症', '狂牛病'],
      explanation:
        '感染性をもつ異常タンパク質（プリオンprion）によって脳内の神経細胞死が引き起こされる病気。正常なプリオンたんぱく質PrPの構造変化が原因で、これが鋳型となってプリオンが次々に変性していく（感染性）。最終的には脳が海綿状になる。',
    },
    {
      term: ['ポーア効果'],
      explanation:
        '血液中のCO₂濃度が増加するとpH低下→ヘモグロビンの酸素親和性の低下を招く。CO₂自身もHbのアミノ基と結合しカルバミン酸を生成しT型を安定化しさらに酸素親和性を低下させる。　CO₂の多い部位（酸素消費の激しい部位）に酸素を届けることを助ける',
    },
    {
      term: ['2,3-ビスホスホグリセリン酸', '2,3-BPG'],
      explanation:
        'Hbの酸素親和性を低下させる物質（他ポーア効果など）。デオキシ型Hb4量体を安定化させることでHbの酸素親和性を低下させる。通常はHb濃度と同程度存在するが、高地適応や閉塞性肺気腫の長期的低酸素に応答して濃度が上昇する。胎児ヘモグロビンHbFは2,3-BPGに対する親和性が低い→酸素親和性が高い',
    },
    {
      term: ['サラセミア症候群'],
      explanation:
        '人類でもっともよくみられる一遺伝子疾患。αグロビン鎖またはβグロビン鎖の合成障害により正常ヘモグロビンの数が減少する。',
    },
    {
      term: ['グルコサミノグリカン', 'GAG', 'ムコ多糖'],
      explanation:
        'グルコサミノグリカンは分岐のないヘテロ多糖類（アミノ酸やウロン酸を含む二糖を繰り返し単位とするポリマー）で、大量の水を結合する。グリコサミノグリカンはタンパク質に結合してプロテオグリカンを形成し、細胞外基質の成分となる。細胞の構造維持に寄与する。分解時はエンドサイトーシスによりリソソームで加水分解酵素(エキソグリコシダーゼ・エンドグリコシダーゼ・スルファターゼ)によってオリゴ糖の非還元末端から1個ずつ分解される。→ムコ多糖症はリソソームの加水分解酵素の欠損が原因でGAGがリソソームに蓄積し起こる機能障害。欠損している酵素の種類により7種類に分類され、東アジアではHunter症候群が一番多い。',
    },
    {
      term: ['エナンチオマー', '鏡像異性体'],
      explanation:
        'ヒトではD-糖(カルボニル炭素から最も遠い不斉炭素に結合するOH基がFisherの投影式において右側に位置する)が圧倒的に多い。',
    },
    {
      term: ['アノマー炭素'],
      explanation:
        'もとのカルボニル炭素から環化によってできた不斉炭素をアノマー炭素という。→α-グルコースとβグルコース',
    },
    {
      term: ['還元糖'],
      explanation:
        'アノマー炭素（環化した糖のC1）に結合した酸素が、他の構造と結合していない糖。フェーリング溶液を還元して発色する。単糖は全て還元糖である。',
    },
    {
      term: [
        'メイラード反応',
        'メラノイジン',
        'AGEs',
        'Advanced Glycation End Products',
      ],
      explanation:
        'タンパク質やアミノ酸と糖（のヒドロキシ基）が反応し褐色物質メラノイジンを生じる反応（糖化）。AGEsは糖尿病や加齢にともない増加し、標的たんぱく質の変性や機能低下、活性酸素の生成やAGE受容体を介した作用による細胞動態の異常を引き起こす。→糖化ヘモグロビンHbA1cが過去1～2ヶ月の平均の血糖値を反映し、血糖コントロールの指標となる。',
    },
    {
      term: ['ラクトース'],
      explanation:
        '乳糖。ガラクトシル-β(1→4)-グルコース。アフリカ・アジア系成人の90%がラクトース不耐症。',
    },
    {
      term: ['スクロース'],
      explanation:
        'ショ糖。グルコシル-α(1→2)-フルクトース。スクロースを吸収できなくなると分解されない二糖が小腸で吸収されずに大腸に至り、腸内細菌によって発酵されるために、ガス発生や腹痛や下痢をおこす。',
    },
    {
      term: ['マルトース'],
      explanation: '麦芽糖。グルコシル-α(1→4)-グルコース',
    },
    {
      term: ['セルロース'],
      explanation:
        '植物細胞壁の主成分。β-D-グルコースがβ1→4結合した直鎖状ポリマーで、水素結合により安定化している。肉食哺乳類は消化できない。',
    },
    {
      term: ['α-アミラーゼ'],
      explanation:
        '糖のα1→4結合を加水分解する。デンプンなどはマルトースやイソマルトースまで分解される。',
    },
    {
      term: ['SGLT'],
      explanation:
        'Na⁺とグルコースを共輸送する二次能動輸送体。SGLT1は小腸上皮細胞管腔側、SGLT2は腎臓尿細管でグルコースとガラクトースを吸収（再吸収）している。',
    },
    {
      term: ['ケラタン硫酸'],
      explanation:
        'D-ガラクトースとN-アセチルコリングルコサミンの繰り返しで構成されるグリコサミノグリカン。Ⅰ型は角膜に、Ⅱ型は疎性結合線維にコンドロイチン硫酸と共に存在する。',
    },
    {
      term: ['ヘパリン'],
      explanation:
        '硫酸化ウロン酸と硫酸化グルコサミンの繰り返しで構成されるグリコサミノグリカン。肥満細胞の細胞内成分で、抗凝固因子としてはたらく。',
    },
    {
      term: ['プロテオグリカンモノマー'],
      explanation:
        '95%以上が糖質で構成された、GAG(ヒアルロン酸以外)とタンパク質との共有結合。プロテオグリカン集合体は多数のプロテオグリカンモノマーがヒアルロン酸と結合して形成され、弾力がありコラーゲン・糖タンパク質とともに細胞外マトリックスを構成する。特に皮膚・軟骨・血管壁・角膜などに多い。',
    },
    {
      term: ['アスコルビン酸', 'ビタミンC'],
      explanation:
        'アスコルビン酸はウロン酸経路（肝臓におけるATPを産生しないグルコースの酸化経路）によってグルコースから生成される。ただし、哺乳類とモルモットはL-グロノラクトンオキシダーゼを持たず、アスコルビン酸を合成できないため、ビタミンとして食事から摂取する必要がある。',
    },
    {
      term: ['糖タンパク質'],
      explanation:
        '糖質（オリゴ糖）がO-グリコシド結合またはN-グリコシド結合によって結合しているタンパク質。糖鎖は比較的短く、連続的な繰り返し構造を持たない。タンパク質の溶解度や立体構造を変化させたり、分解から防御したりする作用をもつ。身体の様々な組織に存在しており、例えば赤血球表面のタンパク質とO-グリコシド結合で結合したオリゴ糖末端構造の違いが血液型を決定している。→ABO式血液型（A型では共通の構造の末端にN-アセチルガラクトサミンが、B型では末端にガラクトースが結合しており、O型はそのまま）',
    },
    {
      term: ['I細胞病', 'I-cell disease'],
      explanation:
        'リソソームに輸送されるタンパク質は、N-結合オリゴ糖の特定のマンノースがリン酸化されるが、マンノースのリン酸化を行う酵素が欠損し、リソソームに輸送されるべき酸性加水分解酵素（酸性ヒドロラーゼ）がリソソームに存在せず、リソソーム内に本来分解されるべき基質が蓄積することで発症する。細胞内に封入体(inclusion body)が蓄積し、骨格異常・精神発達遅延・ガーゴイル様顔貌（大頭・前額突出・低い鼻梁・眼間開離・幅広く厚い口唇）などの症状を有する',
    },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
  ])
  const showTechnicalTerm = () => {
    return technicalTerm.filter(
      (value) => value.term && value.term !== [] && value.term !== [''],
    )
  }
  return {
    showTechnicalTerm,
  }
}
