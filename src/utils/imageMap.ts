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
