// ============================================================
// 旅游看板洞察投影 — 请勿手改权威副本
// 权威：data_source/canonical/travel-insights.json
// 重新生成：node scripts/generate_insights_js.js
// ============================================================

const INSIGHTS = {
  "meta": {
    "basedOnTravelJsonUpdatedAt": "2026-07-20",
    "confirmedAt": {
      "weekly": "2026-07-22",
      "monthly": "2026-07-22",
      "quarterly": "2026-07-22"
    },
    "stale": {
      "weekly": false,
      "monthly": false,
      "quarterly": false
    }
  },
  "weekly": {
    "zh": [
      {
        "tag": "risk",
        "title": "酒店 RevPAR 连续走弱",
        "body": "最新有数周（7/5-7/11）酒店 RevPAR 同比 <span class=\"num-highlight\">-6.5%</span>，入住率 <span class=\"num-highlight\">-4.8%</span>、ADR <span class=\"num-highlight\">-1.8%</span>；此前一周（6/28-7/4）RevPAR 亦为 <span class=\"num-highlight\">-5.3%</span>，量价同向承压。",
        "refs": [
          "weekly.hotelRevPAR@7/5-7/11",
          "weekly.hotelOccupancy@7/5-7/11",
          "weekly.hotelADR@7/5-7/11",
          "weekly.hotelRevPAR@6/28-7/4"
        ]
      },
      {
        "tag": "risk",
        "title": "机票票价同比转负",
        "body": "7/5-7/11 机票票价同比 <span class=\"num-highlight\">-8.0%</span>，客运量同比约 <span class=\"num-highlight\">-1.0%</span>；6/21-6/27 起票价已连续四周为负，存在以价换量迹象。",
        "refs": [
          "weekly.aviationTicket@7/5-7/11",
          "weekly.aviationPax@7/5-7/11",
          "weekly.aviationTicket@6/21-6/27"
        ]
      },
      {
        "tag": "outlook",
        "title": "暑期周度需求仍待观察",
        "body": "客运量同比降幅已从 5 月下旬的约 <span class=\"num-highlight\">-10%</span> 收窄至近周 <span class=\"num-highlight\">-1%</span> 左右，若 7 月中下旬周度继续改善，暑期出行修复才更站得住。",
        "refs": [
          "weekly.aviationPax@5/31-6/06",
          "weekly.aviationPax@7/5-7/11"
        ]
      }
    ],
    "en": [
      {
        "tag": "risk",
        "title": "Hotel RevPAR keeps softening",
        "body": "Latest week with data (7/5–7/11): hotel RevPAR <span class=\"num-highlight\">-6.5%</span> YoY, occupancy <span class=\"num-highlight\">-4.8%</span>, ADR <span class=\"num-highlight\">-1.8%</span>; prior week (6/28–7/4) RevPAR was also <span class=\"num-highlight\">-5.3%</span>.",
        "refs": [
          "weekly.hotelRevPAR@7/5-7/11",
          "weekly.hotelOccupancy@7/5-7/11",
          "weekly.hotelADR@7/5-7/11",
          "weekly.hotelRevPAR@6/28-7/4"
        ]
      },
      {
        "tag": "risk",
        "title": "Airfares turn negative YoY",
        "body": "7/5–7/11 airfares <span class=\"num-highlight\">-8.0%</span> YoY with pax about <span class=\"num-highlight\">-1.0%</span>; fares have been negative for four weeks since 6/21–6/27, hinting at price-for-volume.",
        "refs": [
          "weekly.aviationTicket@7/5-7/11",
          "weekly.aviationPax@7/5-7/11",
          "weekly.aviationTicket@6/21-6/27"
        ]
      },
      {
        "tag": "outlook",
        "title": "Summer weekly demand still to confirm",
        "body": "Pax YoY improved from about <span class=\"num-highlight\">-10%</span> in late May to near <span class=\"num-highlight\">-1%</span> recently; firmer mid/late-July weekly prints would better support a summer rebound.",
        "refs": [
          "weekly.aviationPax@5/31-6/06",
          "weekly.aviationPax@7/5-7/11"
        ]
      }
    ]
  },
  "monthly": {
    "zh": [
      {
        "tag": "highlight",
        "title": "铁路客运月度保持正增长",
        "body": "1–6 月铁路客运量同比持续为正；5 月 <span class=\"num-highlight\">+1.9%</span>，6 月 <span class=\"num-highlight\">+0.4%</span>，在航空波动背景下仍具韧性。",
        "refs": [
          "monthly.railway@5月",
          "monthly.railway@6月"
        ]
      },
      {
        "tag": "risk",
        "title": "国内航空 4–5 月增速转负",
        "body": "民航局口径国内客运量 4 月约持平转弱，5 月同比 <span class=\"num-highlight\">-7.8%</span>；三大航 5 月约 <span class=\"num-highlight\">-9.3%</span>，月度量能明显承压。",
        "refs": [
          "monthly.domAviationCAAC@5月",
          "monthly.domAviationBig3@5月"
        ]
      },
      {
        "tag": "outlook",
        "title": "关注 6 月月度能否企稳",
        "body": "酒店 RevPAR 5 月同比仅 <span class=\"num-highlight\">+0.8%</span>，国内航空已转负；6 月月度数据披露后，才能判断下行是短暂调整还是趋势延续。",
        "refs": [
          "monthly.hotelRevPAR@5月",
          "monthly.domAviationCAAC@5月"
        ]
      }
    ],
    "en": [
      {
        "tag": "highlight",
        "title": "Rail pax stays positive monthly",
        "body": "Railway pax YoY stayed positive through Jan–Jun; May <span class=\"num-highlight\">+1.9%</span>, June <span class=\"num-highlight\">+0.4%</span>, resilient amid aviation swings.",
        "refs": [
          "monthly.railway@5月",
          "monthly.railway@6月"
        ]
      },
      {
        "tag": "risk",
        "title": "Domestic air weakens in Apr–May",
        "body": "CAAC domestic pax turned soft in April and <span class=\"num-highlight\">-7.8%</span> YoY in May; Big3 May about <span class=\"num-highlight\">-9.3%</span>.",
        "refs": [
          "monthly.domAviationCAAC@5月",
          "monthly.domAviationBig3@5月"
        ]
      },
      {
        "tag": "outlook",
        "title": "Watch whether June stabilizes",
        "body": "Hotel RevPAR May only <span class=\"num-highlight\">+0.8%</span> YoY while domestic air turned negative; June monthly prints will show if this is a dip or a trend.",
        "refs": [
          "monthly.hotelRevPAR@5月",
          "monthly.domAviationCAAC@5月"
        ]
      }
    ]
  },
  "quarterly": {
    "zh": [
      {
        "tag": "highlight",
        "title": "国际航线 Q1 强劲",
        "body": "Q1 国际航空客运量同比约 <span class=\"num-highlight\">+10.3% ~ +12.8%</span>（民航局 / 三大航）；国际航班运力相对 2019 仍约 <span class=\"num-highlight\">-9.6%</span>，供需缺口仍在。",
        "refs": [
          "quarterly.q1.intlAviationCAAC",
          "quarterly.q1.intlAviationBig3",
          "quarterly.q1.intlCapacity"
        ]
      },
      {
        "tag": "highlight",
        "title": "铁路与酒店 Q1 整体为正",
        "body": "Q1 铁路客运同比约 <span class=\"num-highlight\">+5.7%</span>；酒店 RevPAR 约 <span class=\"num-highlight\">+4.8%</span>（ADR 约 +3.8% 驱动）。",
        "refs": [
          "quarterly.q1.railway",
          "quarterly.q1.hotelRevPAR",
          "quarterly.q1.hotelADR"
        ]
      },
      {
        "tag": "risk",
        "title": "Q2 部分指标弱于 Q1",
        "body": "Q2 部分均值（4–5 月）国内航空民航局口径约 <span class=\"num-highlight\">-4.0%</span>，低于 Q1 的约 <span class=\"num-highlight\">+5.5%</span>；酒店 RevPAR 部分均值约 <span class=\"num-highlight\">+3.3%</span>，动能已放缓。",
        "refs": [
          "quarterly.q2partial.domAviationCAAC",
          "quarterly.q1.domAviationCAAC",
          "quarterly.q2partial.hotelRevPAR"
        ]
      },
      {
        "tag": "outlook",
        "title": "暑期能否扭转 Q2 开局偏弱",
        "body": "Q2 已现国内航与酒店动能放缓；若 7–8 月旺季不能带动周/月度修复，全年节奏将更依赖国际与铁路的结构性支撑。",
        "refs": [
          "quarterly.q2partial.domAviationCAAC",
          "quarterly.q2partial.hotelRevPAR"
        ]
      }
    ],
    "en": [
      {
        "tag": "highlight",
        "title": "International routes strong in Q1",
        "body": "Q1 intl air pax about <span class=\"num-highlight\">+10.3%–+12.8%</span> YoY (CAAC / Big3); capacity vs 2019 still about <span class=\"num-highlight\">-9.6%</span>.",
        "refs": [
          "quarterly.q1.intlAviationCAAC",
          "quarterly.q1.intlAviationBig3",
          "quarterly.q1.intlCapacity"
        ]
      },
      {
        "tag": "highlight",
        "title": "Rail and hotels positive in Q1",
        "body": "Q1 railway pax about <span class=\"num-highlight\">+5.7%</span>; hotel RevPAR about <span class=\"num-highlight\">+4.8%</span> (ADR-led ~+3.8%).",
        "refs": [
          "quarterly.q1.railway",
          "quarterly.q1.hotelRevPAR",
          "quarterly.q1.hotelADR"
        ]
      },
      {
        "tag": "risk",
        "title": "Q2 softer than Q1 on several metrics",
        "body": "Q2 partial (Apr–May avg) domestic air (CAAC) about <span class=\"num-highlight\">-4.0%</span> vs Q1 ~<span class=\"num-highlight\">+5.5%</span>; hotel RevPAR partial ~<span class=\"num-highlight\">+3.3%</span>, momentum slowing.",
        "refs": [
          "quarterly.q2partial.domAviationCAAC",
          "quarterly.q1.domAviationCAAC",
          "quarterly.q2partial.hotelRevPAR"
        ]
      },
      {
        "tag": "outlook",
        "title": "Can summer reverse a soft Q2 start",
        "body": "Q2 already shows softer domestic air and hotel momentum; without July–August repair in weekly/monthly prints, the year leans more on intl and rail.",
        "refs": [
          "quarterly.q2partial.domAviationCAAC",
          "quarterly.q2partial.hotelRevPAR"
        ]
      }
    ]
  }
};
