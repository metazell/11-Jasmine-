describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    setServerNameInput('Alice');
  });

  it('should add a new server on submitServerInfo()', function () {
    submitServerInfo();

    const newServer = allServers['server' + serverId];
    expect(Object.keys(allServers).length).toEqual(1);
    expect(newServer.serverName).toEqual('Alice');
  });

  it('should not add a new server on submitServerInfo() with empty input', function () {
    setServerNameInput('');
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update #serverTable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    const curTdList = document.querySelectorAll('#serverTable tbody tr td');
    const [serverNameTd, earningsTd, deleteBtnTd] = curTdList;

    expect(curTdList.length).toEqual(3);
    expect(serverNameTd.innerText).toEqual('Alice');
    expect(earningsTd.innerText).toEqual('$0.00');
    expect(deleteBtnTd.innerText).toEqual('X');
  });

  afterEach(function() {
    resetServerData();
  });

  function setServerNameInput(name) {
    serverNameInput.value = name;
  }

  function resetServerData() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  }
});

