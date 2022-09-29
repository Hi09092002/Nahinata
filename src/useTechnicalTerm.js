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
    {
      term: ['オレイン酸', 'オクタデセン酸'],
      explanation:
        '炭素数18の長鎖脂肪酸（枝分かれのない、長い炭化水素鎖）二重結合を１つもち、天然では殆どがシス型の不飽和脂肪酸。',
    },
    {
      term: ['トリアシルグリセロール', 'トリグリセリド', '中性脂肪'],
      explanation:
        'グリセロールに3個の脂肪酸（パルミチン酸・オレイン酸・ステアリン酸・リノール酸など）がエステル結合してできる。多くの生物のエネルギー貯蔵型。脂肪細胞では脂肪滴として貯蔵され、エネルギー(ATP)産生・熱産生のためβ酸化されたり、熱絶縁体として動物の皮下脂肪として利用される。完全酸化で1gあたり9kcalのエネルギーが得られ、糖と比べてはるかに効率的にエネルギーを貯蔵できる。生合成はほぼすべての組織で行われる（肝臓・脂肪組織で活発）。',
    },
    {
      term: ['ホスホグリセリド', 'グリセロリン脂質'],
      explanation:
        'スフィンゴリン脂質と並ぶリン脂質のひとつ。生体内の膜の基本となる脂質。グリセロールに脂肪酸２つとリン酸１つがエステル結合したホスファチジン酸が基本成分。極性のリン酸エステルの部分と長い非極性の炭化水素鎖をもち両親媒性。ホスファチジルコリン（肺サーファクタント）・ホスファチジルエタノールアミン（生体膜成分）・ホスファチジルセリン（脳・神経組織・赤血球膜に多い）・ホスファチジルイノシトール（セカンドメッセンジャー前駆体）など。',
    },
    {
      term: ['スフィンゴリン脂質'],
      explanation:
        'ホスホグリセリドと並ぶリン脂質のひとつ。スフィンゴシンのアミノ基に脂肪酸がアミド結合したもの（セラミド）の1位のOH基にリン酸を含む極性基が結合したもの。スフィンゴミエリン（脳・神経系）など。',
    },
    {
      term: [
        'スフィンゴ糖脂質',
        '糖脂質',
        'セレブロシド',
        'グルコシルセラミド',
      ],
      explanation:
        'セラミドと1個以上の糖を含む脂質。細胞膜の外表面に存在する。セレブロシドはD-ガラクトース（→ガラクトシルセラミド/ミエリンで主要）・D-グルコース（→グルコシルセラミド/非神経組織で主要）が結合したもので、ガングリオシドは1分子以上のシアル酸を含むスフィンゴ糖脂質の総称（脳神経系に多量に存在し、細胞接着などに関与する）。',
    },
    {
      term: ['コレステロール'],
      explanation:
        '最もふつうにみられるステロイドで、OH基があるため弱い両親媒性物質。細胞膜で膜の流動性を抑制するはたらきをもち、胆汁酸やステロイドホルモンの合成に利用される。生合成は肝臓・腸管・副腎皮質・生殖器で行われる。',
    },
    {
      term: ['イソプレノイド', 'テルペン', 'コエンザイムQ', '補酵素Q'],
      explanation:
        'イソプレンを構成単位とする化合物の総称。補酵素Q・ビタミンA・ドリコールアルコールが該当し、補酵素Q(コエンザイムQ)はユビキノンと呼ばれ、ミトコンドリアの電子伝達鎖の構成成分である。',
    },
    {
      term: ['エイコサノイド'],
      explanation:
        '炭素数20のポリエン脂肪酸から作られる一群の生理活性物質。プロスタグランジンPG,トロンボキサンTX,ロイコトリエンLTに大別される。いずれも局所で一過性に産生され、その場で細胞にシグナルを伝え、速やかに分解される。刺激に応じてホスホリパーゼA₂によって膜結合リン脂質から遊離されたアラキドン酸が、シクロオキシゲナーゼCOXの作用で2分子の酸素と反応し、様々のPEやTXが生成される。アスピリンなどの非ステロイド性抗炎症薬NSAIDsはこの過程のCOXの阻害剤として作用する。',
    },
    {
      term: ['ハウスキーピング遺伝子', 'housekeeping gene'],
      explanation:
        '例えばRNA合成酵素・エネルギー生成系酵素・リボソームのタンパク質・細胞骨格タンパク質などの遺伝子の総称で、多くの組織や細胞中に共通して一定量発現する遺伝子のこと。常に発現され、細胞の維持・増殖に不可欠な遺伝子である。',
    },
    {
      term: ['活性部位', 'active site'],
      explanation:
        '酵素反応が実際に起こる部位。基質が酵素に結合し化学変化を受ける部位。一次配列上で近接、または折り畳みによって近づくことで、触媒作用に適した三次構造を形成する。',
    },
    {
      term: ['補因子', 'cofactor', '求電子基', '補酵素', 'coenzyme'],
      explanation:
        '補因子は非タンパク性で、金属イオン・ビタミン由来の低分子有機化合物などが該当する。タンパク質中のアミノ酸側鎖に求電子基がないため、多くの酵素は補因子cofactorを取り込んで求電子性反応を補っている。金属イオンは酸化還元作用・構造支持・Lewis酸としての作用などを有し、補酵素cocenzymeは電子・官能基などの運搬体としてはたらく。※補酵素は単独では触媒作用をもたない。',
    },
    {
      term: ['基質チャネリング'],
      explanation:
        '一連の化学反応を効率よく行うため、酵素群が密接して反応を触媒すること。例：ピルビン酸デヒドロゲナーゼ複合体など',
    },
    {
      term: ['補酵素A', 'CoA'],
      explanation:
        '補酵素のひとつで、アシル基の運搬体としてはたらく。例：アセチルCoAなど',
    },
    {
      term: ['Ligase', '連結酵素'],
      explanation:
        'ATPの加水分解と共役してC-C,C-S,C-O,C-N結合などを形成させる反応。慣用名：シンテターゼ・カルボシキラーゼ',
    },
    {
      term: ['ヘキソキナーゼ', 'hexokinase', 'グルコキナーゼ'],
      explanation:
        'β-D-GlucoseをGlucose 6-phosphateへ変化させる酵素。グルコース・Mg²⁺（補因子）・ATPが結合したとき、ヘキソキナーゼはコンホメーションが変化し、触媒活性を示す（誘導適合）。4種類のアイソザイムをもち、グルコース親和性・局在・フィードバック阻害を受けるかどうかが異なる。グルコキナーゼはヘキソキナーゼⅣとも呼ばれ、肝臓・膵臓β細胞などに存在し、グルコース親和性が低いため食後の血糖上昇にしたがって活性を増大させることができる。',
    },
    {
      term: ['一般酸・塩基触媒作用', 'His残基', 'ヒスチジン残基'],
      explanation:
        'ヒスチジンHis残基のイミダゾール基（pKa=6.0）がプロトンH⁺供与体や受容体として機能し、効率的にプロトンを転移させる。→酵素反応の協奏的酸-塩基触媒として重要な働きをしている。',
    },
    {
      term: ['キモトリプシン'],
      explanation:
        'キモトリプシンは遷移状態安定化、一般酸-塩基触媒作用、共有結合性触媒作用を利用し、ポリペプチドを加水分解させる。',
    },
    {
      term: ['酵素反応速度', '酵素反応速度論'],
      explanation:
        '酵素はタンパク質なので、反応速度は様々な要素に影響されて変化する。因子として、温度・pH・酵素濃度・基質濃度などが挙げられる。実際の酵素反応では酵素反応速度は基質濃度に影響されるため、反応が始まった直後の初速度から測定される。',
    },
    {
      term: [
        'MichaelisとMentenの迅速平衡法',
        'Michaelis',
        'Menten',
        '迅速平衡法',
      ],
      explanation:
        'v₀ = Vmax[S] / (Ks + [S]) ※Vmaxは最大反応速度、基質Sは酵素EとES複合体を形成し、生成物Pに変換される。KsはESの解離定数',
    },
    {
      term: ['BriggsとHaldaneの定常状態法', 'Briggs', 'Haldane', '定常状態法'],
      explanation:
        'MichaelisとMentenの理論を一般化したもの。 v₀ = Vmax[S] / (Km + [S])　※Kmは (k‐₁ + k₂) / k₁ で算出され、基質に対する酵素の親和性の指標として用いられる。v₀がVmaxの半分の時の基質濃度に等しい。',
    },
    {
      term: ['代謝回転率', 'turnover number', 'kcat'],
      explanation:
        'kcat = Vmax / [E]t　であり、酵素が基質により飽和されている条件下で、酵素一分子によって単位時間あたりに生成物に変換される基質の分子数を表す（単位：s⁻¹）。反応の律速段階の速度定数に等しい。',
    },
    {
      term: ['特異性定数', 'specificity constant'],
      explanation:
        'kcat / Kmで表される。ミカエリス-メンテンの式で v₀ = ( kcat / Km ) [E]t[S]で表されるため、kcat / Kmは[S] << Km のときの二次速度定数となる。',
    },
    {
      term: [
        'ラインウィーバー-バークプロット',
        'Lineweaver-Burk plot',
        'Lineweaver-Burk',
      ],
      explanation:
        'ミカエリス-メンテンの式の両辺の逆数をとることで、1/v₀-1/[S]のプロットが直線で表現される（→二重逆数プロット）。Vmaxの近似値をより正確に求めることができ、酵素反応機構の作用タイプを区別でき、酵素の阻害様式を解析できるが、基質濃度[S]が低い場合に,Kmに誤差が生じやすい。',
    },
    {
      term: ['多基質反応', '逐次反応', '二重置換反応', 'ピンポン反応'],
      explanation:
        '基質が複数ある場合、一方の基質の濃度のみを変えながら反応速度を測定することで、2つの基質の関係性を解析することができる。逐次反応では、E→ES₁→ES₁S₂ or E→ES₂→ES₁S₂ の反応のどちらか（あるいは両方）の経路で反応が進んでいくため、Sの濃度を上げても必ず反応速度があがるわけではない。二重置換反応（ピンポン反応）では最初の生成物が酵素から離れた後に次の基質が結合するので、どちらかの基質の濃度を上げることによって反応全体の速度も上がっていく。',
    },
    {
      term: ['酵素反応阻害剤', '酵素阻害剤', 'inhibitor'],
      explanation:
        '酵素反応の速度を低下させる物質を阻害剤inhibitorという。阻害様式によって、不可逆的阻害剤irreversible inhibitor（自殺型阻害剤など）・可逆的阻害剤reversible inhibitor（競合阻害・不競合阻害・混合型阻害・非競合阻害）に分類される。',
    },
    {
      term: ['非競合阻害', 'noncompetitive inhibition'],
      explanation:
        '酵素の活性部位とは異なる部位に結合し、遊離の酵素EにもES複合体にも結合できる。多基質反応を行う酵素でのみ存在し、不競合阻害とは異なり酵素Eにも不可逆的な結合を行い不活化できる混合阻害のなかで、K₁ = K₁’となり遊離酵素EやES複合体を区別せず結合できる阻害方式を特別に非競合阻害とよぶ。',
    },
    {
      term: ['フィードバック阻害', 'feedback inhibition'],
      explanation:
        '一連の反応系の最終産物がその経路の特定の酵素の活性を阻害することをフィードバック阻害という。フィードバック阻害を受ける酵素はアロステリック効果により調節される事が多い。律速酵素（反応系のうち最も反応速度が遅い反応/律速段階を触媒する）はフィードバック阻害を受けることが多い。',
    },
    {
      term: ['アロステリック効果', 'allosteric effect'],
      explanation:
        '酵素の調節部位（アロステリック部位=基質結合部位以外の部位）に調節因子が可逆的に非共有結合で結合すると酵素のコンホメーションが変化し、酵素活性が上昇または低下することをアロステリック効果といい、このような制御を受ける酵素をアロステリック酵素allosteric enzymeと呼ぶ。酵素を合成・分解しないため短時間で酵素の活性を変化させることができる。アロステリック酵素はミカエリス-メンテンの式には従わず、v₀と[S]のプロットはシグモイド型（S字型）の曲線を描く。→酸素解離曲線？　アロステリック酵素の例：アスパラギン酸トランスカルバモイラーゼ',
    },
    {
      term: ['共有結合性修飾による調節', '共有結合性修飾'],
      explanation:
        '酵素タンパク質に特定の化合物が共有結合により可逆的に結合することで酵素の活性を変化させる。リン酸化・アセチル化・ADP-リボシル化・アデニリル化・ミリストイル化・メチル化など。',
    },
    {
      term: ['リン酸化酵素'],
      explanation:
        'kinaseと付く酵素はATPからリン酸を供与され基質をリン酸化する。ホスホリラーゼと呼ばれる酵素はATPではなく無機リン酸を付加させる酵素。糖などはリン酸化することで細胞外への流出を防ぐことができる。',
    },
    {
      term: ['脱リン酸化酵素'],
      explanation: 'ホスファターゼと付く酵素は基質を脱リン酸化する酵素。',
    },
    {
      term: ['不可逆的な切断による調節', '酵素前駆体'],
      explanation:
        '不活性な酵素前駆体として合成され、必要に応じて不可逆的な限定分解を受けて活性型となる酵素。消化酵素・血液凝固因子などに含まれるプロテアーゼが多い（特定の部位に移動するまで活性化しないように前駆体の形で合成される）',
    },
    {
      term: ['アイソザイム', 'isozyme'],
      explanation:
        '同一個体内にあり同じ反応を触媒するが、タンパク質としては異なる酵素群をアイソザイムという。アミノ酸配列は類似しているが、速度論的特性・調節様式・補因子・細胞内分布などが異なる。',
    },
    {
      term: ['逸脱酵素'],
      explanation:
        '組織が損傷したときに、その細胞中に含まれる酵素が血中に漏れ出る。このような酵素を逸脱酵素とよび、その由来組織の疾患の種類や程度の診断に利用できる。例：アラニントランスアミナーゼALT、アスパラギン酸トランスアミナーゼAST、クレアチンキナーゼCK、アルカリホスファターゼALP、乳酸デヒドロゲナーゼLDH',
    },
    {
      term: ['抗体酵素', 'catalytic antibody'],
      explanation:
        '特定の分子（抗原）を認識して特異的に結合し（→抗体）、遷移状態の基質と特異的に結合してこれを安定化する（→酵素）ようなタンパク質。人工酵素として利用されている。',
    },
    {
      term: ['NADH', 'FADH₂'],
      explanation:
        '炭水化物・脂質・タンパク質の酸化（酸化的リン酸化）により生成される高エネルギー化合物。還元型の補酵素で、電子供与体ともよばれる。ミトコンドリアの電子伝達系(複合体Ⅰなど)でプロトンを渡し、（ATPシンターゼにより）ATP合成に利用される。',
    },
    {
      term: ['エルゴン反応'],
      explanation:
        'ΔG = ΔH - TΔS。ΔH：エンタルピー（熱）変化、ΔS：エントロピー（無秩序さ）変化、T：絶対温度。　ΔGが負である反応は自発的に進行し（発エルゴン反応）、ΔGが負である反応は自由エネルギーが外部から供給されなければ進行しない（吸エルゴン反応）。ΔG=0の場合は平衡状態となる。',
    },
    {
      term: ['標準自由エネルギー変化', 'ΔG⁰'],
      explanation:
        'ΔG（自由エネルギー変化）に対し、ΔG⁰を標準自由エネルギー変化とよぶ。ΔG = ΔG⁰ + RTIn([B] / [A])が成り立ち、ΔGは標準状態での自由エネルギー変化だけでなく反応物[A]と生成物[B]の濃度に依存して反応は進む',
    },
    {
      term: ['クレアチン'],
      explanation:
        '筋肉で多く存在し、ADPのリン酸化に使われ、ATP濃度を維持する。　ADP + クレアチンリン酸 → ATP + クレアチン。触媒するのはクレアチンキナーゼ。',
    },
    {
      term: ['TCA回路', 'クエン酸回路', 'citric acid cycle'],
      explanation:
        'ミトコンドリア内部のマトリックスで栄養素由来のアセチルCoAからGTP,2CO₂,8e⁻を取り出す回路。取り出した電子は3NADHやFADH₂としてミトコンドリアの電子伝達系に運ばれ、最終的にATP合成に利用される。',
    },
    {
      term: ['マトリックス'],
      explanation:
        'ミトコンドリアの最内部。ピルビン酸・TCA回路酵素・脂肪酸酸化酵素・NAD⁺・FAD・ATP・リン酸などが含まれる。',
    },
    {
      term: ['ATPシンターゼ'],
      explanation:
        'ATPの加水分解のエネルギーを必要としない合成酵素。電子伝達系（複合体Ⅴ）に存在し、ミトコンドリア内膜に埋まっている。膜間腔のH⁺がマトリックスに戻る際に回転し、酵素を活性化する。H⁺の濃度勾配を運動エネルギーへ変換する分子モーター。',
    },
    {
      term: ['コハク酸デヒドロゲナーゼ', '複合体Ⅱ'],
      explanation:
        '電子伝達系の複合体Ⅱと、TCA回路の酵素（コハク酸デヒドロゲナーゼ）は共通しており、FAD→FADH₂を行う',
    },
    {
      term: ['シトクロム'],
      explanation:
        'ヘムを含むヘムたんぱく質のうち、電子伝達系ではたらくものの総称をシトクロムとよぶ。シトクロムcは表在性膜タンパク質で、ミトコンドリア膜表面をゆるく拡散し、複合体Ⅲから電子を受け取り、複合体Ⅳへ渡す。',
    },
    {
      term: ['レドックス対'],
      explanation:
        '半反応における酸化剤と還元剤のペア。NAD⁺/NADH,FMN/FMNH₂など',
    },
    {
      term: ['酸化的リン酸化', '化学浸透圧説'],
      explanation:
        '電子伝達と共役しておこるADPのリン酸化。中間体は存在せず、電子伝達の過程で生じたプロトンの濃度勾配（電気化学ポテンシャル）によって複合体Ⅴ（ATPシンターゼ）がATPを合成する。→化学浸透圧説 1961 Peter Mitchell',
    },
    {
      term: ['P/O比'],
      explanation:
        '一対の電子が酸素原子に渡され水が生成する際に合成されるATPの分子数。1対のNADHからの電子伝達で10個、1対のFADH₂からの電子伝達で6個のH⁺がくみだされる。ATPシンターゼによるATP1分子の合成に必要なH⁺は3個前後だが、H⁺勾配はリン酸の輸送等にも利用されるので、NADHの実測P/O比は2.5,FADH₂の実測P/O比は1.5となる。電子伝達が起こると起こった分だけ必ずATP合成を行う。',
    },
    {
      term: ['脱共役タンパク質', 'uncoupling protein'],
      explanation:
        '膜間腔からマトリックスへのプロトンH⁺の通り道を作り、電子伝達→酸化的リン酸化が共役しなくなる。ATP合成に利用されなくなったエネルギーは熱として放出される。（→非ふるえ熱産生）。褐色脂肪細胞における熱産生に関与している。',
    },
    {
      term: ['合成脱共役物質', 'ジニトロフェノール', 'アスピリン'],
      explanation:
        'ミトコンドリア内膜のプロトン透過性は通常極端に低いが、合成脱共役物質によってプロトン透過性がたかまり、濃度勾配が消失する。プロトン勾配は酸化的リン酸化でのATP合成に必要。アスピリンも同様の作用を示す。',
    },
    {
      term: ['ミトコンドリア異常症'],
      explanation:
        '呼吸鎖の機能障害によって起こる多様な疾患群。ミトコンドリアの遺伝情報は核内DNAもしくはミトコンドリアDNAに保存されており、これに変異が起こると複数の内臓器官に影響を及ぼし、顕著な神経・筋肉障害をもたらす（酸化的リン酸化の依存度が高い組織である中枢神経系・骨格筋・心筋などが影響されやすい）。',
    },
    {
      term: ['同化', 'anabolism'],
      explanation:
        '同化経路anabolismは生体成分を合成する反応で、吸エルゴン反応である。補酵素はNADPHであることが多い。例：グリコーゲン合成・トリグリセリド合成・タンパク合成など',
    },
    {
      term: ['異化', 'catabolism'],
      explanation:
        '異化経路は生体より簡単な物質に分解する反応で、酸化反応が含まれる。発エルゴン反応で、還元当量ができて、ADPからATPを産生する。補酵素はNAD⁺であることが多い。例：解答系・脂肪酸のβ酸化など',
    },
    {
      term: ['両性経路', 'amphibolic pathway'],
      explanation:
        '同化経路と異化経路の両方を連結している化学反応群。例：クエン酸回路（異化=アセチルCoAの酸化 / 同化=アミノ酸や糖新生のためのオキサロ酢酸の供給など）など。',
    },
    {
      term: ['不可逆非平衡反応'],
      explanation:
        '一方通行で平衡に達しない化学反応。代謝経路全体の流速を決める律速段階に関与する事がおおい。この酵素活性を調節（フィードフォワード・フィードバック）することで、経路全体を制御することができる。',
    },
    // {
    //   term:[''],
    //   explanation:'',
    // },
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
