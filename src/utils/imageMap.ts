export function treeImgNameByName(treeName: string) {
  const treeNameMap = {
    향나무: 't1',
    바오밥나무: 't2',
    소나무: 't3',
    명자나무: 't4',
    조팝나무: 't5',
    귤나무: 't6',
    야자수: 't7',
  };

  return treeNameMap[treeName as keyof typeof treeNameMap];
}

export function getImagUri(challengeName: string) {
  const challengeImgMap = {
    '버스 출퇴근': 'challenging_bus',
    '지하철 출퇴근': 'challenging_subway',
    '자전거 출퇴근': 'challenging_bike',
    '뚜벅이 출퇴근': 'challenging_walking',
    '킥보드 출퇴근': 'challenging_kick',
    '쓰레기 줍깅': 'challenging_trash',
    '동식물 사진찍기': 'challenging_animal',
  };
  return encodeURI(
    `/Icon/SVG/${
      challengeImgMap[challengeName as keyof typeof challengeImgMap]
    }.svg`,
  );
}
