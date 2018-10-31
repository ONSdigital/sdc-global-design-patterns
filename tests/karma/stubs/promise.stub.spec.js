export default function promiseInstanceMock() {
  const obj = {
    then: function () {},
    catch: function () {}
  };

  chai.spy.on(obj, 'then', function () { return obj; });
  chai.spy.on(obj, 'catch', function () { return obj; });

  return obj;
}
