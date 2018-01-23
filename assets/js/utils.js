export function objHasInterface (obj, interfaceObj) {
  let isIt = true;

  for (var i in interfaceObj) {
    !obj[i] && (isIt = false);
  }

  return isIt;
}
