const circuitData = ['서울', '인천', '경기도', '강원도', '충청도',
                            '부산', '경상도', '전라도', '제주도'];
const cityData = {
    서울: ['은평/서대문/마포', '종로/중구/용산', '노원/도봉/강북/성북',
          '중랑/동대문/성동/광진', '강서/양천/구로', '영등포/동작/관악/금천',
          '서초/강남/송파/강동'],
    인천: ['강화/중구', '서구/계양/부평', '동구/미추홀', '남동/연수'],
    경기도: ['연천/포천/동두천', '파주/양주/남양주', '김포/고양', '가평/양평',
            '구리/하남/성남', '부천/과천/광명', '안양/의왕/군포', '시흥/안산',
            '수원/화성/오산', '용인/광주/여주', '평택/안성/이천'],
    강원도: ['고성/속초/양양', '철원/양구/인제', '화천/춘천/홍천', '강릉/동해/삼척',
            '원주/횡성/평창', '영월/정선/태백'],
    충청도: ['단양/제천/충주', '음성/괴산', '진천/증평/청주', '보은/옥천/영동',
            '천안/아산', '당진/서산/태안', '예산/홍성/청양', '보령/부여/서천',
            '대전', '공주/계룡/금산/논산'],
    부산: ['기장/금정', '해운대구', '수영/영도', '부산진/연제/동래', '북구/강서구',
          '사상/사하', '동구/서구/남구/중구'],
    경상도: ['울진/영양/봉화', '영주/예천/문경', '상주/김천/구미', '칠곡/성주/고령',
            '안동/의성/군위', '영덕/포항/청송', '영천/경산/청도', '경주/울산', '대구',
            '함양/거창/합천', '산청/하동/진주', '의령/창녕/함안', '밀양/양산/김해',
            '창원/고성', '사천/남해', '통영/거제'],
    전라도: ['무주/진안/장수', '완주/전주', '익산/군산/김제', '부안/고창/정읍',
            '임실/순창/남원', '영광/장성/함평', '무안/신안/진도', '담양/곡성/구례',
            '광양/순천/여수', '광주/나주/화순', '보성/장흥/고흥', '목포/영암',
            '해남/강진/완도'],
    제주도: ['제주시', '서귀포시']
};

// 도/시 select에 옵션을 동적으로 추가
const circuitSelect = document.getElementById('circuit');
const citySelect = document.getElementById('city');

// '도/시' 선택지 채우기
circuitData.forEach(circuit => {
    const option = document.createElement('option');
    option.value = circuit;
    option.textContent = circuit;
    circuitSelect.appendChild(option);
});

// '도/시'가 선택되었을 때 '시/구/군' 옵션을 동적으로 갱신
circuitSelect.addEventListener('change', function () {
    const selectedCircuit = circuitSelect.value;
    citySelect.innerHTML = '<option selected>-시/구/군-</option>'; // 초기화

    if (cityData[selectedCircuit]) {
        cityData[selectedCircuit].forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
});