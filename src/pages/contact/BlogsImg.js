import React, { Component } from "react";

export default class BlogsImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      // <svg
      //   id="b4ce20e6-8fe7-43d5-87f7-68602c562594"
      //   data-name="Layer 1"
      //   xmlns="http://www.w3.org/2000/svg"
      //   width="1061"
      //   height="742.85506"
      //   viewBox="0 0 1061 742.85506"
      // >
      //   <title>task</title>
      //   <path
      //     d="M1118.5,516.01425c0,103.85867-61.74233,140.12223-137.90535,140.12223S842.68931,619.87292,842.68931,516.01425,980.59465,280.031,980.59465,280.031,1118.5,412.15559,1118.5,516.01425Z"
      //     transform="translate(-69.5 -78.57247)"
      //     fill={theme.compImgHighlight}
      //   />
      //   <polygon
      //     points="906.071 561.677 907.483 474.756 966.262 367.224 907.705 461.121 908.34 422.038 948.85 344.239 908.508 411.696 908.508 411.696 909.649 341.403 953.029 279.466 909.829 330.35 910.543 201.459 906.059 372.087 906.427 365.048 862.323 297.54 905.72 378.561 901.61 457.065 901.488 454.981 850.644 383.939 901.334 462.343 900.82 472.16 900.728 472.308 900.77 473.114 890.344 672.287 904.274 672.287 905.945 569.41 956.511 491.199 906.071 561.677"
      //     fill={theme.text}
      //   />
      //   <path
      //     d="M831.65688,421.48618c0,134.32387-79.85341,181.22475-178.35758,181.22475S474.94172,555.81005,474.94172,421.48618s178.35758-305.205,178.35758-305.205S831.65688,287.16231,831.65688,421.48618Z"
      //     transform="translate(-69.5 -78.57247)"
      //     fill={theme.compImgHighlight}
      //   />
      //   <polygon
      //     points="577.302 503.591 579.128 391.174 655.149 252.098 579.415 373.539 580.236 322.992 632.629 222.372 580.453 309.615 580.453 309.616 581.93 218.704 638.034 138.598 582.162 204.408 583.085 37.709 577.286 258.389 577.763 249.285 520.722 161.975 576.848 266.761 571.533 368.293 571.375 365.598 505.617 273.717 571.176 375.119 570.511 387.817 570.392 388.008 570.446 389.05 556.962 646.647 574.978 646.647 577.14 513.593 642.538 412.44 577.302 503.591"
      //     fill={theme.text}
      //   />
      //   <path
      //     d="M1107.47,769.93754c0,10.11-29.37988,19.55-80.13995,27.5-91.98,14.42-254.15,23.99-438.85,23.99-286.62,0-518.98-23.05-518.98-51.49,0-3.93,4.46-7.78,12.91-11.46,9.53-4.17,24.15-8.14,43.17005-11.85,39.21-7.65,97.13995-14.19,167.8-19.05,82.02-5.62994,181.21-8.98,288.21-9.11q3.435-.015,6.88995-.01,19.335,0,38.33.14,8.925.06006,17.77.16c63.02.67,122.66,2.46,176.86,5.16,2.42.12,4.83.25,7.23.37.82.04,1.64.09,2.46.13.22.01.44.02.66.04q15.975.84,31.25,1.79,5.01.3,9.93.63c31.87006,2.07,61.29,4.48,87.75,7.19q6.78.68994,13.30005,1.41c33.48,3.67,61.66992,7.84,83.38989,12.37C1089.51,754.53751,1107.47,762.0275,1107.47,769.93754Z"
      //     transform="translate(-69.5 -78.57247)"
      //     fill={theme.text}
      //   />
      //   <ellipse
      //     cx="752.96319"
      //     cy="688.14768"
      //     rx="113.08238"
      //     ry="26.20202"
      //     opacity="0.1"
      //   />
      //   <path
      //     d="M1107.47,769.93754c0,10.11-29.37988,19.55-80.13995,27.5-38.38-4.19-64.95-13.24-64.95-23.72,0-13.05,41.16-23.87,95.02991-25.87C1089.51,754.53751,1107.47,762.0275,1107.47,769.93754Z"
      //     transform="translate(-69.5 -78.57247)"
      //     opacity="0.1"
      //   />
      //   <path
      //     d="M632.15381,757.98614c0,17.26572-123.07592,31.25855-274.89132,31.25855-150.39039,0-272.5745-13.72617-274.85457-30.77131,29.19-12.74244,106.04-23.683,210.96763-30.9,20.50191-.5516,41.89565-.8458,63.88694-.8458C509.07789,726.7276,632.15381,740.72037,632.15381,757.98614Z"
      //     transform="translate(-69.5 -78.57247)"
      //     opacity="0.1"
      //   />
      //   <rect
      //     x="56.08151"
      //     width="456.00701"
      //     height="683.09115"
      //     fill={theme.text}
      //   />
      //   <rect
      //     x="83.66258"
      //     y="237.1972"
      //     width="428.42594"
      //     height="209.61613"
      //     fill={theme.dark}
      //   />
      //   <rect
      //     x="256.50394"
      //     y="241.79404"
      //     width="423.8291"
      //     height="199.50307"
      //     fill={theme.text}
      //   />
      //   <rect
      //     x="282.47612"
      //     y="271.21385"
      //     width="94.695"
      //     height="34.01665"
      //     fill={theme.imageHighlight}
      //   />
      //   <rect
      //     x="305.92003"
      //     y="330.97283"
      //     width="348.44084"
      //     height="9.19369"
      //     fill={theme.imageHighlight}
      //   />
      //   <rect
      //     x="305.92003"
      //     y="354.87642"
      //     width="348.44084"
      //     height="9.19369"
      //     fill={theme.imageHighlight}
      //   />
      //   <rect
      //     x="305.92003"
      //     y="378.78002"
      //     width="348.44084"
      //     height="9.19369"
      //     fill={theme.imageHighlight}
      //   />
      //   <rect
      //     x="305.92003"
      //     y="402.68361"
      //     width="348.44084"
      //     height="9.19369"
      //     fill={theme.imageHighlight}
      //   />
      //   <rect
      //     x="86.42068"
      //     y="77.22699"
      //     width="94.695"
      //     height="34.01665"
      //     fill={theme.compImgHighlight}
      //   />
      //   <rect
      //     x="109.86459"
      //     y="136.98598"
      //     width="348.44084"
      //     height="9.19369"
      //     fill={theme.compImgHighlight}
      //   />
      //   <rect
      //     x="109.86459"
      //     y="160.88957"
      //     width="348.44084"
      //     height="9.19369"
      //     fill={theme.compImgHighlight}
      //   />
      //   <rect
      //     x="109.86459"
      //     y="184.79316"
      //     width="348.44084"
      //     height="9.19369"
      //     fill={theme.compImgHighlight}
      //   />
      //   <rect
      //     x="109.86459"
      //     y="208.69676"
      //     width="348.44084"
      //     height="9.19369"
      //     fill={theme.compImgHighlight}
      //   />
      //   <rect
      //     x="90.09816"
      //     y="467.95881"
      //     width="94.695"
      //     height="34.01665"
      //     fill={theme.compImgHighlight}
      //   />
      //   <rect
      //     x="113.54207"
      //     y="527.71779"
      //     width="348.44084"
      //     height="9.19369"
      //     fill={theme.compImgHighlight}
      //   />
      //   <rect
      //     x="113.54207"
      //     y="551.62138"
      //     width="348.44084"
      //     height="9.19369"
      //     fill={theme.compImgHighlight}
      //   />
      //   <rect
      //     x="113.54207"
      //     y="575.52498"
      //     width="348.44084"
      //     height="9.19369"
      //     fill={theme.compImgHighlight}
      //   />
      //   <rect
      //     x="113.54207"
      //     y="599.42857"
      //     width="348.44084"
      //     height="9.19369"
      //     fill={theme.compImgHighlight}
      //   />
      //   <path
      //     d="M792.56281,219.0309s18.90356,24.22018,16.54061,41.35153S848.092,236.753,848.092,236.753s-14.17767-29.53681-6.4981-43.71448S792.56281,219.0309,792.56281,219.0309Z"
      //     transform="translate(-69.5 -78.57247)"
      //     fill="#ffb9b9"
      //   />
      //   <path
      //     d="M858.72526,709.34191s24.81092,27.17386,20.67577,33.08122-76.7957,28.35533-85.066,27.17386-12.40546-7.08883-9.45178-8.861,21.85724-11.81472,21.85724-11.81472l15.94988-18.31282s11.81472-6.4981,11.81472-10.04252S858.72526,709.34191,858.72526,709.34191Z"
      //     transform="translate(-69.5 -78.57247)"
      //     fill={theme.dark}
      //   />
      //   <path
      //     d="M816.783,739.46945s-9.45177,15.35914-11.224,15.94988,8.861,21.85723,8.861,21.85723L839.231,769.597l13.58693-11.224-2.95368-15.35914Z"
      //     transform="translate(-69.5 -78.57247)"
      //     fill="#ffb9b9"
      //   />
      //   <path
      //     d="M791.38134,446.46432l-11.81472,52.57552s-40.7608,91.5641-12.40546,107.514l62.02729,118.738,33.08123-14.7684-55.5292-121.69165,25.40165-140.00447Z"
      //     transform="translate(-69.5 -78.57247)"
      //     fill="#d0cde1"
      //   />
      //   <path
      //     d="M791.38134,446.46432l-11.81472,52.57552s-40.7608,91.5641-12.40546,107.514l62.02729,118.738,33.08123-14.7684-55.5292-121.69165,25.40165-140.00447Z"
      //     transform="translate(-69.5 -78.57247)"
      //     opacity="0.1"
      //   />
      //   <path
      //     d="M795.51649,454.73463h-5.99365a333.982,333.982,0,0,0,3.04,54.34772c4.13515,30.12754,14.76841,99.24367,14.76841,99.24367s-1.18148,12.9962,2.36294,17.13135,4.13515-1.18147,4.72589,8.27031,6.20273,75.167,6.20273,75.167,3.83978,13.44347-.29537,16.39715-12.40546,18.90356-6.4981,21.2665,46.66816,5.31663,48.44037,3.54442,0-112.8306,0-112.8306-1.18148-22.448-2.36295-23.62945-6.4981-17.13135-4.72589-20.67577.59074-14.17766.59074-15.94987-5.31663,0-.59074-7.67957,5.31663-69.11613,5.31663-69.11613,25.40165-38.98859,17.72208-49.0311Z"
      //     transform="translate(-69.5 -78.57247)"
      //     fill="#d0cde1"
      //   />
      //   <circle cx="739.60342" cy="110.33089" r="38.98859" fill="#ffb9b9" />
      //   <path
      //     d="M848.092,230.25489s-23.62945,5.90736-33.08122,20.085l-8.27031,1.77221v8.2703s-15.35914,49.0311-11.81472,70.2976,0,62.618-5.90737,73.842-7.67957,13.58693-4.72588,18.31282,7.08883,20.67577,4.13515,27.7646,0,14.17767,27.17386,15.94988,65.57171,1.77221,65.57171-7.67957-2.36294-36.03491,0-43.12374,3.54442-11.81472,2.36295-18.31282,2.36294-79.15864,2.36294-79.15864S886.48986,245.614,848.092,230.25489Z"
      //     transform="translate(-69.5 -78.57247)"
      //     fill={theme.dark}
      //   />
      //   <path
      //     d="M792.56281,412.79236l-32.49049,48.44036s-34.26269,31.309-21.85723,45.48669S783.111,465.36788,783.111,465.36788l35.44417-40.17006Z"
      //     transform="translate(-69.5 -78.57247)"
      //     fill="#ffb9b9"
      //   />
      //   <path
      //     d="M813.23858,758.373s-1.18148-7.67957-5.31663-7.67957S776.0222,769.597,776.0222,769.597s-36.62564,4.13516-22.448,11.81473,101.01588,8.861,101.60661,5.90736,1.77221-32.08116-2.36294-31.99046-37.21638,6.5888-37.21638,6.5888Z"
      //     transform="translate(-69.5 -78.57247)"
      //     fill={theme.dark}
      //   />
      //   <path
      //     d="M811.87686,168.76089a9.77913,9.77913,0,0,1-4.45607,1.00684c-1.59349.09057-3.49555-.008-4.343-1.36045a6.221,6.221,0,0,1-.54225-2.837,9.34634,9.34634,0,0,0-10.92238-7.96043,13.44458,13.44458,0,0,0,1.74051,5.54339,11.85549,11.85549,0,0,1-10.42222-1.38722l-.60006,7.95737c-2.1192,1.01275-4.834,1.224-6.68211-.2255s-1.99585-4.85139.09446-5.9225c-2.582-.5384-5.73992-1.69522-5.92989-4.32593-.17333-2.40039,2.37513-4.15727,2.84437-6.51772.38272-1.92518-.6727-4.01766.07418-5.83287.98118-2.38464,4.54365-2.99682,5.25837-5.4744.364-1.26178-.15973-2.61142-.03472-3.91869.32734-3.42283,4.63049-4.84393,8.06342-4.64939s7.17972,1.10618,10.09614-.71518c1.41407-.88311,2.40169-2.29662,3.64423-3.40818a10.82274,10.82274,0,0,1,12.568-1.09287c1.38063.85856,2.58527,2.04835,4.125,2.57019,3.151,1.06792,6.43846-.95269,9.73277-1.41848a8.0861,8.0861,0,0,1,6.77889,1.96365,5.54921,5.54921,0,0,1,1.01,6.686c1.93273-.32645,3.98079-.64221,5.8023.08175s3.21335,2.905,2.37066,4.67472a6.05576,6.05576,0,0,0-.735,1.50119c-.171,1.0296.8205,1.90986,1.82158,2.2051s2.0876.24,3.06773.59872c4.04919,1.48193,3.07759,7.95527,6.2646,10.85958a25.41622,25.41622,0,0,0,3.45482,2.11281,8.4062,8.4062,0,0,1,2.96417,10.15561c-.63881,1.41464-1.70919,2.76468-1.58024,4.3115.18086,2.1695,2.50546,3.35783,4.13683,4.79939a9.62473,9.62473,0,0,1,2.24041,11.05039c-1.49958,3.12814-4.74717,5.49944-5.07685,8.95275-.1433,1.50108.30776,2.99971.28208,4.5074a9.287,9.287,0,0,1-3.99193,7.01155,20.76464,20.76464,0,0,1-7.663,3.18852c-1.28776.30824-2.82439.79082-3.13606,2.07775-.36952,1.52585,1.33294,2.91435,1.15677,4.47439a2.59459,2.59459,0,0,1-1.0418,1.68634c-2.30448,1.80225-5.95147.25721-7.3606-2.30659s-1.229-5.67066-1.01054-8.588l.79458-10.60829c.24724-3.30077.22352-7.22049-2.46726-9.14818-2.97476-2.13114-7.30715-.40582-10.67124-1.84592-3.50523-1.50052-4.76265-5.892-4.62122-9.70232s1.23314-7.62654.60545-11.388c-.77818-4.66122-4.92422-7.794-9.11051-4.77343C814.14944,162.829,814.7847,167.05152,811.87686,168.76089Z"
      //     transform="translate(-69.5 -78.57247)"
      //     fill={theme.dark}
      //   />
      //   <path
      //     d="M844.54759,258.61022S820.91815,268.062,820.91815,288.147s1.18147,46.66816-2.95368,55.5292-7.67957,11.81472-5.31663,18.90356,6.4981,5.90736,0,11.224-5.90736-3.54441-6.4981,5.31663,5.90736,10.04251,0,14.17767-21.2665,20.67576-14.7684,25.99239,23.62945,22.448,29.53681,15.94987,8.861-23.03871,17.13135-21.85724,9.45177,1.77221,8.2703-4.13515-6.4981-5.90736.59074-7.67957,10.04251,2.363,7.67957-3.54441-4.13516-8.27031.59073-14.76841,7.08884-8.2703,6.4981-14.7684,12.9962-64.981,12.9962-64.981S878.81029,253.88433,844.54759,258.61022Z"
      //     transform="translate(-69.5 -78.57247)"
      //     opacity="0.1"
      //   />
      //   <path
      //     d="M838.0495,257.42875S814.42,266.88053,814.42,286.96556s1.18147,46.66815-2.95368,55.5292-7.67957,11.81472-5.31663,18.90355,6.4981,5.90737,0,11.224-5.90736-3.54442-6.49809,5.31663,5.90736,10.04251,0,14.17766-21.26651,20.67577-14.76841,25.99239,23.62945,22.448,29.53681,15.94988,8.861-23.03871,17.13135-21.85724,9.45178,1.77221,8.2703-4.13515-6.49809-5.90736.59074-7.67957,10.04251,2.36294,7.67957-3.54442-4.13515-8.2703.59074-14.7684,7.08883-8.27031,6.49809-14.7684,12.9962-64.981,12.9962-64.981S872.31219,252.70286,838.0495,257.42875Z"
      //     transform="translate(-69.5 -78.57247)"
      //     opacity="0.1"
      //   />
      //   <path
      //     d="M841.00318,255.65654s-23.62945,9.45178-23.62945,29.53681,1.18147,46.66816-2.95368,55.5292-7.67957,11.81472-5.31663,18.90356,6.4981,5.90736,0,11.224-5.90736-3.54441-6.49809,5.31663,5.90736,10.04251,0,14.17767-21.26651,20.67576-14.76841,25.99239,23.62945,22.448,29.53681,15.94987,8.861-23.03871,17.13135-21.85724,9.45178,1.77221,8.2703-4.13515-6.49809-5.90736.59074-7.67957,10.04251,2.363,7.67957-3.54442-4.13515-8.2703.59074-14.7684,7.08883-8.27031,6.49809-14.7684,12.9962-64.981,12.9962-64.981S875.26587,250.93065,841.00318,255.65654Z"
      //     transform="translate(-69.5 -78.57247)"
      //     fill={theme.dark}
      //   />
      //   <path
      //     d="M964.5,663.78694c0,51.68416,32.42393,93.50633,72.49367,93.50633"
      //     transform="translate(-69.5 -78.57247)"
      //     fill={theme.dark}
      //   />
      //   <path
      //     d="M1036.99367,757.29327c0-52.26489,36.18322-94.557,80.89874-94.557"
      //     transform="translate(-69.5 -78.57247)"
      //     fill={theme.imageHighlight}
      //   />
      //   <path
      //     d="M990.76582,668.47219c0,49.09446,20.67613,88.82108,46.22785,88.82108"
      //     transform="translate(-69.5 -78.57247)"
      //     fill={theme.imageHighlight}
      //   />
      //   <path
      //     d="M1036.99367,757.29327c0-66.78291,41.82217-120.82279,93.50633-120.82279"
      //     transform="translate(-69.5 -78.57247)"
      //     fill={theme.dark}
      //   />
      //   <path
      //     d="M1021.74287,757.9525s10.2808-.31664,13.37917-2.523,15.81445-4.84077,16.58308-1.30233,15.45013,17.59858,3.84316,17.6922-26.96943-1.808-30.06184-3.69167S1021.74287,757.9525,1021.74287,757.9525Z"
      //     transform="translate(-69.5 -78.57247)"
      //     fill="#a8a8a8"
      //   />
      //   <path
      //     d="M1055.75542,770.58768c-11.607.09365-26.96942-1.808-30.06184-3.69167-2.355-1.43454-3.29349-6.582-3.60749-8.9569-.21746.00935-.34322.01338-.34322.01338s.65117,8.29153,3.74358,10.17525,18.45487,3.78532,30.06184,3.69167c3.35047-.027,4.50778-1.21907,4.44423-2.9846C1059.52707,769.9015,1058.24922,770.56757,1055.75542,770.58768Z"
      //     transform="translate(-69.5 -78.57247)"
      //     opacity="0.2"
      //   />
      // </svg>
      <svg xmlns="http://www.w3.org/2000/svg" id="a36533cd-eb13-4bd5-8e12-9c43fd701efb" data-name="Layer 1" width="885.58745" height="762.89248" viewBox="0 0 885.58745 762.89248">
        <title>mello</title>
        <path d="M376.948,313.57787S282.23242,346.2,264.06779,376.31267,376.948,313.57787,376.948,313.57787Z" transform="translate(-157.20627 -68.55376)" fill={theme.imageHighlight}/>
        <path d="M213.29691,417.99716a4.6155,4.6155,0,0,1-3.59308-1.32569c-2.94663-2.65429-.53838-7.67244,1.52831-11.21728,27.71033-47.50121,167.03962-97.55829,172.956-99.66551l12.74173-4.53766-10.91046,7.99277c-.4033.2962-40.9364,29.96516-82.43049,57.9167C239.07948,410.618,219.92732,417.99716,213.29691,417.99716Zm158.50846-103.33c-36.585,14.161-135.17853,55.09646-157.15768,92.77845-2.92733,5.01719-2.3079,6.27727-2.30019,6.28789.59242.63872,8.07961,4.64861,88.55147-49.52546C328.95085,345.32317,356.62644,325.60176,371.80537,314.66718Z" transform="translate(-157.20627 -68.55376)" fill="#3f3d56"/>
        <path d="M374.89529,280.994s-87.28413-8.97221-113.76274,6.3604S374.89529,280.994,374.89529,280.994Z" transform="translate(-157.20627 -68.55376)" fill={theme.imageHighlight}/>
        <path d="M255.9546,295.65878c-30.55275,0-32.65033-4.89755-33.61131-7.13695-1.92-4.48074,3.42327-8.7,5.17928-10.08648,37.88557-29.9121,152.95868.31647,157.83886,1.61708l9.359,2.496-9.58862,1.36911c-.38594.055-38.94111,5.53917-77.84942,8.97209C284.59118,294.89173,268.0441,295.65878,255.9546,295.65878ZM282.729,269.3002c-21.51989,0-41.20657,3.11741-52.75575,12.23616-3.485,2.75077-4.34952,4.60713-3.99639,5.42725.88573,2.06476,9.33969,8.30923,80.95815,1.9895,26.68759-2.35518,53.20729-5.67714,67.29209-7.54025C356.18068,277.2592,317.11414,269.3002,282.729,269.3002Z" transform="translate(-157.20627 -68.55376)" fill="#3f3d56"/>
        <path d="M399.8741,265.6213s-43.90353-105.418-33.26616-115.85263S399.8741,265.6213,399.8741,265.6213Z" transform="translate(-157.20627 -68.55376)" fill={theme.imageHighlight}/>
        <path d="M402.30216,274.89437l-5.45908-13.94875c-.13315-.34156-13.49046-34.55783-24.4974-69.78429-22.67191-72.54856-13.37853-78.74382-10.32576-80.77964a5.14036,5.14036,0,0,1,5.24682-.44287c17.12406,7.97926,31.76846,135.549,33.38168,150.069Zm-37.27579-161.5207a1.4662,1.4662,0,0,0-.81432.2962c-10.91046,7.274,11.20763,78.88759,30.65117,131.01137-6.669-53.74568-18.94954-126.3531-29.26566-131.16092A1.342,1.342,0,0,0,365.02637,113.37367Z" transform="translate(-157.20627 -68.55376)" fill="#3f3d56"/>
        <path d="M416.468,288.803s23.56445-106.55435,48.251-106.55435S416.468,288.803,416.468,288.803Z" transform="translate(-157.20627 -68.55376)" fill={theme.imageHighlight}/>
        <path d="M410.25055,296.15568l2.33106-8.77333c1.71164-6.43358,42.39912-157.57256,86.87843-157.57256,6.09782,0,8.728,2.86076,9.86264,5.26033,11.85986,25.11779-82.50576,140.95022-93.30429,154.075ZM499.46,133.76179c-35.5024,0-70.79254,112.20945-80.46993,145.4657C450.8319,239.666,514.29934,154.86776,505.7489,136.75763,505.39769,136.01663,504.33443,133.76179,499.46,133.76179Z" transform="translate(-157.20627 -68.55376)" fill="#3f3d56"/>
        <path d="M430.3,289.86586s81.016-51.19564,247.00011-35.568S430.3,289.86586,430.3,289.86586Z" transform="translate(-157.20627 -68.55376)" fill={theme.imageHighlight}/>
        <path d="M424.77338,292.00106l4.24146-3.63554c.85871-.73617,21.51216-18.19406,62.89433-32.23351,38.08047-12.92216,101.5595-25.09463,187.71429-9.7073,36.39971,6.50016,41.12552,11.34368,40.809,15.60925-.31261,4.21444-1.04589,14.0848-146.47878,23.23538-71.06849,4.47109-142.87991,6.55129-143.59776,6.57155Zm176.65911-48.81147c-93.58216,0-148.90826,33.25143-164.94976,44.50826,18.99007-.60785,78.36851-2.66972,137.23172-6.37376,135.13993-8.50317,142.64449-17.80427,142.77571-19.58248.01544-.19007-.08491-4.73449-37.56138-11.42665A440.49716,440.49716,0,0,0,601.43249,243.18959Z" transform="translate(-157.20627 -68.55376)" fill="#3f3d56"/>
        <path d="M481.676,295.86962S623.58742,293.9755,631.56,309.12851,481.676,295.86962,481.676,295.86962Z" transform="translate(-157.20627 -68.55376)" fill={theme.imageHighlight}/>
        <path d="M649.73259,334.59024c-45.2975,0-154.17824-32.52586-168.62967-36.90529l-11.8425-3.58825,12.37123-.27788c18.15258-.4062,177.64132-3.05952,187.67377,29.04953,1.18869,3.80342-.18911,6.24351-1.55533,7.62131C664.89415,333.36972,658.505,334.59024,649.73259,334.59024ZM494.62038,297.58943c66.5646,19.50915,158.99281,41.552,170.32394,30.11762.61364-.61943,1.235-1.59489.59049-3.65966C658.40654,301.23558,549.63,297.216,494.62038,297.58943Z" transform="translate(-157.20627 -68.55376)" fill="#3f3d56"/>
        <path d="M454.012,311.60187s85.71521,39.618,68.96626,51.80809S454.012,311.60187,454.012,311.60187Z" transform="translate(-157.20627 -68.55376)" fill={theme.imageHighlight}/>
        <path d="M576.38514,411.34263c-41.46322,0-125.88708-99.73015-129.814-104.3971l-5.5575-6.60629,7.87892,3.53133c5.74854,2.5771,140.82865,63.46552,143.78494,93.96424.39172,4.04463-1.38359,7.58175-5.133,10.22928A18.8818,18.8818,0,0,1,576.38514,411.34263ZM455.41491,311.18891c32.60015,37.40219,105.13328,111.09891,129.84872,93.64681,2.6321-1.85732,3.73781-3.96068,3.48116-6.61979C586.61827,376.28791,498.34661,331.07242,455.41491,311.18891Z" transform="translate(-157.20627 -68.55376)" fill="#3f3d56"/>
        <path d="M596.28408,359.02589s71.136,29.64,55.328,49.4S596.28408,359.02589,596.28408,359.02589Z" transform="translate(-157.20627 -68.55376)" fill={theme.imageHighlight}/>
        <path d="M463.892,335.31388S612.09209,497.346,598.26008,507.226,463.892,335.31388,463.892,335.31388Z" transform="translate(-157.20627 -68.55376)" fill={theme.imageHighlight}/>
        <path d="M436.228,323.45787S498.62388,427.37768,485.89,437.481,436.228,323.45787,436.228,323.45787Z" transform="translate(-157.20627 -68.55376)" fill={theme.imageHighlight}/>
        <path d="M506.85268,476.40883a7.30783,7.30783,0,0,1-2.28861-.384c-22.87453-7.51421-68.97864-142.49687-74.15985-157.86394l-4.6081-13.66606,8.11434,11.92355c.24121.356,24.49353,36.05237,46.01535,72.98178,39.78631,68.26947,36.48847,81.69432,30.547,85.85279A6.221,6.221,0,0,1,506.85268,476.40883Zm-67.678-144.95433c16.81723,47.73856,50.67361,135.577,66.62249,140.81708a2.5049,2.5049,0,0,0,2.41018-.25665c3.265-2.28475,6.71338-14.71484-31.68741-80.60984C462.89631,368.02692,448.16893,345.137,439.17465,331.4545Z" transform="translate(-157.20627 -68.55376)" fill="#3f3d56"/>
        <path d="M409.831,319.50587S353.67424,485.2091,388.13408,483.50082,409.831,319.50587,409.831,319.50587Z" transform="translate(-157.20627 -68.55376)" fill={theme.imageHighlight}/>
        <path d="M374.15573,511.19339c-6.04764,0-10.69819-2.36387-13.832-7.03371-22.23194-33.13468,43.6264-179.26516,46.43988-185.47007l3.00453-6.62172.7603,7.2315c.62328,5.91739,14.88561,145.36632-17.42316,182.61992-5.10789,5.88748-11.18447,9.002-18.06,9.25671C374.74621,511.1876,374.449,511.19339,374.15573,511.19339Zm33.13661-183.908c-13.01961,29.93718-62.07229,147.27092-43.68622,174.67249,2.50474,3.73588,6.19816,5.46681,11.29254,5.27,5.81994-.21612,10.79854-2.8,15.22138-7.89821C417.128,468.18836,409.83181,357.37407,407.29234,327.28541Z" transform="translate(-157.20627 -68.55376)" fill="#3f3d56"/>
        <path d="M390.43494,327.7427S296.17033,435.558,304.79729,446.91328,390.43494,327.7427,390.43494,327.7427Z" transform="translate(-157.20627 -68.55376)" fill={theme.imageHighlight}/>
        <path d="M276.43824,486.21743a5.52055,5.52055,0,0,1-3.45607-1.1443,6.08575,6.08575,0,0,1-2.2423-4.49232c-2.36772-26.78407,123.11026-166.34974,128.45164-172.27775l12.63174-14.01532L402.3697,310.6158c-4.02919,6.95845-98.95827,170.47638-124.52086,175.45884A7.38957,7.38957,0,0,1,276.43824,486.21743Zm112.36-160.29052C347.225,373.14252,273.03234,461.639,274.67644,480.23347a2.16267,2.16267,0,0,0,.73328,1.72128,1.924,1.924,0,0,0,1.68269.24121C294.7587,478.7534,356.47207,380.32965,388.7982,325.92691Z" transform="translate(-157.20627 -68.55376)" fill="#3f3d56"/>
        <path d="M362.14181,255.14254s-82.18265-97.07637-158.17891-87.66835S362.14181,255.14254,362.14181,255.14254Z" transform="translate(-157.20627 -68.55376)" fill={theme.imageHighlight}/>
        <path d="M373.09633,259.67878l-6.46831-1.47814c-.51909-.11868-52.46051-12.03161-103.81338-27.22887-105.15643-31.11912-105.49606-45.42872-105.606-50.13041-.13508-5.67328,5.64048-10.06139,17.65665-13.41519,44.59317-12.44746,94.94452,12.07116,129.32,34.83666a429.998,429.998,0,0,1,64.30493,52.639Zm-172.711-91.67853a90.66265,90.66265,0,0,0-24.4588,3.23319c-9.606,2.68034-14.849,6.05922-14.76791,9.51433.44962,18.97173,117.0684,52.80206,199.53942,72.02755C341.20244,234.07374,267.54817,168.00025,200.38537,168.00025Z" transform="translate(-157.20627 -68.55376)" fill="#3f3d56"/>
        <path d="M297.908,248.36984s-108.68-7.904-100.776,11.856S297.908,248.36984,297.908,248.36984Z" transform="translate(-157.20627 -68.55376)" fill={theme.imageHighlight}/>
        <path d="M325.572,175.25781s-5.928-27.664-15.808-21.736S325.572,175.25781,325.572,175.25781Z" transform="translate(-157.20627 -68.55376)" fill={theme.imageHighlight}/>
        <path d="M425.68821,194.832S452.80282,80.893,440.51375,80.475,425.68821,194.832,425.68821,194.832Z" transform="translate(-157.20627 -68.55376)" fill={theme.imageHighlight}/>
        <path d="M420.64192,220.05842,420.42,204.92677c-.0714-4.85992-1.57849-119.20747,13.28783-134.2957a6.23914,6.23914,0,0,1,4.49618-2.07731,5.25985,5.25985,0,0,1,4.23373,2.168c11.43919,14.65212-15.06508,122.41556-18.12556,134.65558ZM438.204,72.50576c-.19683,0-.795,0-1.68076.89924-9.81826,9.96491-12.09722,76.25646-12.23037,115.24291,10.88344-46.45531,21.97529-106.59984,15.03034-115.49377A1.333,1.333,0,0,0,438.204,72.50576Z" transform="translate(-157.20627 -68.55376)" fill="#3f3d56"/>
        <path d="M550.83606,210.82582s11.856-29.64,23.712-21.736S550.83606,210.82582,550.83606,210.82582Z" transform="translate(-157.20627 -68.55376)" fill={theme.imageHighlight}/>
        <path d="M438.204,473.63394S422.396,590.218,452.036,588.242,438.204,473.63394,438.204,473.63394Z" transform="translate(-157.20627 -68.55376)" fill={theme.imageHighlight}/>
        <path d="M520.89385,447.12094S505.748,421.8779,505.748,404.20777c0,0-26.5052-27.76735-18.93228-35.34026s23.98088,21.45659,23.98088,21.45659S480.505,356.246,489.34005,351.19738s37.86456,32.816,37.86456,32.816l10.09722-5.04861s-21.44667-52.89655-6.31076-54.27254c6.94183-.63108,22.71873,50.48608,22.71873,50.48608l16.408,41.651s6.31076,15.14582,3.78646,23.98089a166.5688,166.5688,0,0,0-3.78646,16.408Z" transform="translate(-157.20627 -68.55376)" fill="#ffb9b9"/>
        <path d="M560.02056,453.4317s8.83507-13.88367,5.63758-35.08334-20.7834-33.07287-20.7834-33.07287-11.35937,8.83506,0,31.5538c0,0-13.88367,12.62152-2.5243,32.81595" transform="translate(-157.20627 -68.55376)" opacity="0.1"/>
        <path d="M565.06917,453.4317s8.83507-13.88367,5.63758-35.08334-20.7834-33.07287-20.7834-33.07287-11.35937,8.83506,0,31.5538c0,0-13.88367,12.62152-2.52431,32.81595" transform="translate(-157.20627 -68.55376)" fill="#ffb9b9"/>
        <path d="M530.36,383.38226,523.41816,372.654s-32.816-5.04861-29.0295,6.31076,18.93228,6.31076,18.93228,6.31076l8.83506,8.83506Z" transform="translate(-157.20627 -68.55376)" opacity="0.1"/>
        <path d="M536.03968,382.75118l-10.09722-13.88367s-32.81595-5.04861-29.0295,6.31076,18.93228,6.31076,18.93228,6.31076l8.83507,8.83507Z" transform="translate(-157.20627 -68.55376)" fill="#ffb9b9"/>
        <polygon points="612.963 480.17 606.652 530.656 705.1 536.967 705.1 476.384 612.963 480.17" fill="#ffb9b9"/>
        <path d="M1042.79373,831.44624,962.95544,671.76968c-4.76958-15.79408-19.664-41.51744-65.94028-58.04467L862.306,584.36256l-25.87412-.9292L732.9354,568.28754s-79.51558-5.04861-131.26382,26.50519L587.78791,588.482s-22.71874-80.77773-12.62152-138.83673l-58.059-5.04861s-31.55381,137.57458-16.408,179.2256,70.68051,71.94266,70.68051,71.94266l49.22393,49.22393,18.93228,85.82634H934.87972l4.69956-22.5186,23.06779,22.5186Z" transform="translate(-157.20627 -68.55376)" fill="#cfcce0"/>
        <path d="M931.16554,544.94415c-92.98763,25.10962-184.38134,26.88481-273.844.38666-10.51611-3.11479-17.706-12.34809-17.706-22.828V261.16669c0-11.69344,8.8977-21.66828,21.02328-23.56988,84.3933-13.235,173.79719-12.20991,267.30477.49412,12.35541,1.67862,21.52736,11.768,21.52736,23.64372V521.94992C949.471,532.64966,941.98321,542.023,931.16554,544.94415Z" transform="translate(-157.20627 -68.55376)" fill="#cfcce0"/>
        <path d="M739.39644,366.11226s-21.38763-31.25885-8.226-39.48486,32.904,14.80682,32.904,14.80682,24.678-21.38763,37.83966-13.16162-13.16162,37.83966-13.16162,37.83966,19.74243,4.93561,21.38763,18.09723,8.226,47.71087-19.74243,49.35608c-14.9831.88136-23.356-3.431-27.90107-7.62533a9.16934,9.16934,0,0,0-12.07694-.14313c-9.48423,7.99031-26.56511,17.20067-38.99171-5.39316C706.49239,385.85469,739.39644,366.11226,739.39644,366.11226Z" transform="translate(-157.20627 -68.55376)" fill="#3f3d56"/>
        <path d="M897.33589,369.40267s21.38763-31.25885,8.226-39.48486-32.904,14.80682-32.904,14.80682-24.678-21.38763-37.83966-13.16162,13.16162,37.83966,13.16162,37.83966-19.74243,4.9356-21.38763,18.09723-8.226,47.71087,19.74243,49.35607c14.98309.88136,23.356-3.431,27.90106-7.62532a9.16933,9.16933,0,0,1,12.077-.14313c9.48422,7.99031,26.5651,17.20066,38.99171-5.39317C930.23994,389.1451,897.33589,369.40267,897.33589,369.40267Z" transform="translate(-157.20627 -68.55376)" fill="#3f3d56"/>
        <path d="M713.4308,454.83487s30.86235,24.84747,96.67237,23.28084,87.092-4.25307,101.15893-19.76449,18.23618,2.40378,13.86817,14.14723-9.978,31.78337-42.76266,35.03155c-21.58337,2.13839-68.23271,2.64529-97.58986,2.74205a150.03117,150.03117,0,0,1-65.96688-14.67516q-.40844-.19792-.8137-.3977a37.34828,37.34828,0,0,1-20.809-33.47443c.00256-5.53442.97666-8.52471,4.57945-9.61466C708.26033,450.14587,713.4308,454.83487,713.4308,454.83487Z" transform="translate(-157.20627 -68.55376)" fill="#3f3d56"/>
        <path d="M807.83693,568.67344A498.46945,498.46945,0,0,1,659.49607,546.1703a28.978,28.978,0,0,1-20.49083-27.76805V212.24557a28.95737,28.95737,0,0,1,24.33319-28.671c90.63689-14.9389,190.99857-14.7451,298.2965.57562a29.18086,29.18086,0,0,1,24.91771,28.76059V517.75487a29.214,29.214,0,0,1-21.18535,27.97023C912.82505,560.63571,860.881,568.35394,810.97744,568.664,809.9341,568.6703,808.88132,568.67344,807.83693,568.67344Zm-3.49667-394.015a865.2424,865.2424,0,0,0-140.653,11.03315,26.81914,26.81914,0,0,0-22.53666,26.554V518.40225A26.83979,26.83979,0,0,0,660.134,544.12132c95.89185,29.85055,198.38893,29.69552,304.64665-.45987l.29331,1.03183-.29331-1.03183a27.05974,27.05974,0,0,0,19.62661-25.90658V212.91076a27.02543,27.02543,0,0,0-23.07614-26.63724A1112.3449,1112.3449,0,0,0,804.34026,174.65846Z" transform="translate(-157.20627 -68.55376)" fill="#3f3d56"/>
        <path d="M797.75022,220.05232c-23.63448,0-43.85923-1.0601-60.41918-2.4968-52.08343-4.51749-80.149-13.63471-80.42657-13.72637l.67251-2.03745c.27551.09113,28.17188,9.145,80.04,13.63523,47.87181,4.14562,126.53957,5.13764,229.43471-13.67189l.38549,2.11078C899.83771,216.22254,842.65175,220.05232,797.75022,220.05232Z" transform="translate(-157.20627 -68.55376)" fill="#3f3d56"/>
    </svg>
    );
  }
}
