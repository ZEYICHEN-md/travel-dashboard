// ============================================================
// 旅游看板洞察投影 — 请勿手改权威副本
// 权威：data_source/canonical/travel-insights.json
// 重新生成：node scripts/generate_insights_js.js
// ============================================================

const INSIGHTS = {
  "meta": {
    "basedOnTravelJsonUpdatedAt": "2026-08-01",
    "confirmedAt": {
      "weekly": "2026-08-10",
      "monthly": "2026-08-10",
      "quarterly": "2026-08-10"
    },
    "stale": {
      "weekly": true,
      "monthly": true,
      "quarterly": true
    }
  },
  "weekly": {
    "zh": [
      {
        "tag": "highlight",
        "title": "客运量连续三周同比转正且扩大",
        "body": "7/26-8/1 国内航空客运量同比 <span class=\"num-highlight\">+8.0%</span>，较前两周约 +6.0% 再扩大，客运航班量同比 <span class=\"num-highlight\">+5.0%</span>。暑运客流在 7 月下半月集中释放，中小学放假偏晚，8 月预订已现走强迹象。",
        "refs": [
          "weekly.aviationPax@7/12-7/18",
          "weekly.aviationPax@7/19-7/25",
          "weekly.aviationPax@7/26-8/1",
          "weekly.aviationFlight@7/26-8/1"
        ]
      },
      {
        "tag": "risk",
        "title": "量强价弱延续，票价同比仍 -7%",
        "body": "7/26-8/1 机票票价同比 <span class=\"num-highlight\">-7.0%</span>，客运量走强未能带动收益；票价较 2019 年同期降幅更深。运力供给充足、旅客价格敏感，票价修复更可能呈结构性、阶段性回升，而非全面上行。",
        "refs": [
          "weekly.aviationTicket@7/26-8/1",
          "weekly.aviationPax@7/26-8/1"
        ]
      },
      {
        "tag": "risk",
        "title": "酒店 RevPAR 仍负但收窄至 -0.9%",
        "body": "7/26-8/1 酒店 RevPAR 同比 <span class=\"num-highlight\">-0.9%</span>，连续三周收窄（-5.4% → -2.0% → -0.9%），ADR 同比转平 0.0%、入住率 -0.9%。量价降幅均处收窄通道，能否转正仍待验证。",
        "refs": [
          "weekly.hotelRevPAR@7/12-7/18",
          "weekly.hotelRevPAR@7/19-7/25",
          "weekly.hotelRevPAR@7/26-8/1",
          "weekly.hotelADR@7/26-8/1",
          "weekly.hotelOccupancy@7/26-8/1"
        ]
      },
      {
        "tag": "outlook",
        "title": "8 月客运走强能否带动票价与酒店转正",
        "body": "后续关键在量能传导：客运同比转正能否带动票价修复、酒店 RevPAR 转正；若量强价弱延续，收益改善仍偏慢。",
        "refs": [
          "weekly.aviationPax@7/26-8/1",
          "weekly.aviationTicket@7/26-8/1",
          "weekly.hotelRevPAR@7/26-8/1"
        ]
      }
    ],
    "en": [
      {
        "tag": "highlight",
        "title": "Pax positive three straight weeks and widening",
        "body": "7/26–8/1 domestic air pax was <span class=\"num-highlight\">+8.0%</span> YoY, widening from about +6.0% the prior two weeks, with flights about <span class=\"num-highlight\">+5.0%</span>. Summer traffic concentrated in late July as school breaks ran late; August bookings already look firmer.",
        "refs": [
          "weekly.aviationPax@7/12-7/18",
          "weekly.aviationPax@7/19-7/25",
          "weekly.aviationPax@7/26-8/1",
          "weekly.aviationFlight@7/26-8/1"
        ]
      },
      {
        "tag": "risk",
        "title": "Volume up, prices still weak at -7%",
        "body": "7/26–8/1 airfares were <span class=\"num-highlight\">-7.0%</span> YoY even as pax strengthened; fares sit deeper below 2019 levels. With ample capacity and price-sensitive travelers, fare repair is more likely structural and phased than a broad uptick.",
        "refs": [
          "weekly.aviationTicket@7/26-8/1",
          "weekly.aviationPax@7/26-8/1"
        ]
      },
      {
        "tag": "risk",
        "title": "Hotel RevPAR still negative but narrowing to -0.9%",
        "body": "7/26–8/1 hotel RevPAR was <span class=\"num-highlight\">-0.9%</span> YoY, narrowing for three straight weeks (-5.4% → -2.0% → -0.9%); ADR flat at 0.0% and occupancy -0.9%. Both are in a narrowing channel — whether they turn positive is still unproven.",
        "refs": [
          "weekly.hotelRevPAR@7/12-7/18",
          "weekly.hotelRevPAR@7/19-7/25",
          "weekly.hotelRevPAR@7/26-8/1",
          "weekly.hotelADR@7/26-8/1",
          "weekly.hotelOccupancy@7/26-8/1"
        ]
      },
      {
        "tag": "outlook",
        "title": "Can August traffic pull fares and hotels positive",
        "body": "The key is transmission: whether stronger pax lifts fares and turns hotel RevPAR positive. If volume-up, price-down persists, revenue repair stays slow.",
        "refs": [
          "weekly.aviationPax@7/26-8/1",
          "weekly.aviationTicket@7/26-8/1",
          "weekly.hotelRevPAR@7/26-8/1"
        ]
      }
    ]
  },
  "monthly": {
    "zh": [
      {
        "tag": "risk",
        "title": "6 月国内航空仍深度走弱",
        "body": "6 月民航局口径国内航空同比 <span class=\"num-highlight\">-7.1%</span>、三大航约 <span class=\"num-highlight\">-7.8%</span>，较 5 月（-7.8%）降幅略收窄但仍深。Q2 高油价压成本、航司控运力是主因；7 月油价回落后能否好转，是下一观察点。",
        "refs": [
          "monthly.domAviationCAAC@6月",
          "monthly.domAviationBig3@6月",
          "monthly.domAviationCAAC@5月"
        ]
      },
      {
        "tag": "risk",
        "title": "国际运力相对 2019 缺口仍深",
        "body": "6 月国际运力（vs 2019）同比 <span class=\"num-highlight\">-16.3%</span>，较 5 月（-15.0%）缺口再扩大；国际客运量 6 月约 <span class=\"num-highlight\">-2.0%</span>。缺口持续存在，恢复偏慢；关注国际增班与入境需求转化。",
        "refs": [
          "monthly.intlCapacity@6月",
          "monthly.intlCapacity@5月",
          "monthly.intlAviationCAAC@6月"
        ]
      },
      {
        "tag": "outlook",
        "title": "7 月月度待出，周度已先行回暖",
        "body": "最近一期月度（6 月）酒店入住率同比 <span class=\"num-highlight\">-2.5%</span>、ADR <span class=\"num-highlight\">+2.2%</span>，量缩价稳；对照当前周度，7/26-8/1 客运量同比已转正至 <span class=\"num-highlight\">+8.0%</span>、酒店 RevPAR 降幅收窄至 -0.9%。7 月月度数据将验证暑期改善能否在月度层面落地。",
        "refs": [
          "monthly.hotelOccupancy@6月",
          "monthly.hotelADR@6月",
          "weekly.aviationPax@7/26-8/1",
          "weekly.hotelRevPAR@7/26-8/1"
        ]
      }
    ],
    "en": [
      {
        "tag": "risk",
        "title": "June domestic air still deeply negative",
        "body": "CAAC domestic pax was <span class=\"num-highlight\">-7.1%</span> YoY in June with Big3 about <span class=\"num-highlight\">-7.8%</span>, only slightly narrower than May (-7.8%). Q2 high fuel pressured costs and carriers cut capacity; whether July fuel relief helps is the next watch.",
        "refs": [
          "monthly.domAviationCAAC@6月",
          "monthly.domAviationBig3@6月",
          "monthly.domAviationCAAC@5月"
        ]
      },
      {
        "tag": "risk",
        "title": "Intl capacity gap vs 2019 still wide",
        "body": "Capacity vs 2019 widened to <span class=\"num-highlight\">-16.3%</span> in June from -15.0% in May; intl pax in June about <span class=\"num-highlight\">-2.0%</span>. The shortfall persists; watch intl add-backs and inbound demand conversion.",
        "refs": [
          "monthly.intlCapacity@6月",
          "monthly.intlCapacity@5月",
          "monthly.intlAviationCAAC@6月"
        ]
      },
      {
        "tag": "outlook",
        "title": "July monthly pending; weekly already firming",
        "body": "The latest monthly print (June) was volume-down, price-stable for hotels (occupancy <span class=\"num-highlight\">-2.5%</span>, ADR <span class=\"num-highlight\">+2.2%</span>); against that, 7/26–8/1 pax is already +8.0% YoY and hotel RevPAR narrowed to -0.9%. July monthly will show whether the summer improvement lands at month level.",
        "refs": [
          "monthly.hotelOccupancy@6月",
          "monthly.hotelADR@6月",
          "weekly.aviationPax@7/26-8/1",
          "weekly.hotelRevPAR@7/26-8/1"
        ]
      }
    ]
  },
  "quarterly": {
    "zh": [
      {
        "tag": "risk",
        "title": "Q2 国内航转负，铁路仍稳",
        "body": "Q2 国内航空同比约 <span class=\"num-highlight\">-5.2%</span>、三大航约 <span class=\"num-highlight\">-6.0%</span>；铁路仍 <span class=\"num-highlight\">+4.6%</span>，难对冲航空转负。Q2 高油价叠加快季末淡季，航司收缩运力是主因。",
        "refs": [
          "quarterly.q2.domAviationCAAC",
          "quarterly.q2.domAviationBig3",
          "quarterly.q2.railway"
        ]
      },
      {
        "tag": "outlook",
        "title": "Q3 中期看量价能否同步修复",
        "body": "Q3 已进入暑运中后段，7/26-8/1 周度客运量同比 <span class=\"num-highlight\">+8.0%</span>、酒店 RevPAR 降幅收窄，但票价同比仍 <span class=\"num-highlight\">-7.0%</span>。量强价弱能否收敛是 Q3 验证点，不宜由单周回暖外推全季。",
        "refs": [
          "weekly.aviationPax@7/26-8/1",
          "weekly.aviationTicket@7/26-8/1",
          "weekly.hotelRevPAR@7/26-8/1",
          "quarterly.q2.domAviationCAAC"
        ]
      }
    ],
    "en": [
      {
        "tag": "risk",
        "title": "Q2 domestic air turned negative; railway held up",
        "body": "Q2 domestic air was about <span class=\"num-highlight\">-5.2%</span> YoY with Big3 about <span class=\"num-highlight\">-6.0%</span>; railway still <span class=\"num-highlight\">+4.6%</span>, not enough to offset the air swing. Q2 high fuel plus late-season softness drove capacity cuts.",
        "refs": [
          "quarterly.q2.domAviationCAAC",
          "quarterly.q2.domAviationBig3",
          "quarterly.q2.railway"
        ]
      },
      {
        "tag": "outlook",
        "title": "Q3 mid-term: can volume and price repair together",
        "body": "Deep into summer travel, 7/26–8/1 weekly pax is +8.0% YoY and hotel RevPAR is narrowing, but fares remain -7.0% YoY. Whether the volume-up, price-down mix converges is the Q3 test — a few warm weeks do not extrapolate to a full quarter.",
        "refs": [
          "weekly.aviationPax@7/26-8/1",
          "weekly.aviationTicket@7/26-8/1",
          "weekly.hotelRevPAR@7/26-8/1",
          "quarterly.q2.domAviationCAAC"
        ]
      }
    ]
  }
};
