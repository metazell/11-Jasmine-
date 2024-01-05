describe("Utilities test (with setup and tear-down)", function() {
    beforeEach(function () {
      setDefaultInputs();
      submitPaymentInfo();
    });
  
    it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(20);
      setInputsAndSubmit(200, 40);
      expect(sumPaymentTotal('tipAmt')).toEqual(60);
    });
  
    it('should sum total bill amount of all payments on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(100);
      setInputsAndSubmit(200, 40);
      expect(sumPaymentTotal('billAmt')).toEqual(300);
    });
  
    it('should sum total tip percent on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(20);
      setDefaultInputs();
      submitPaymentInfo();
      expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });
  
    it('should sum tip percent of a single tip on calculateTipPercent()', function () {
      expect(calculateTipPercent(100, 23)).toEqual(23);
      expect(calculateTipPercent(111, 11)).toEqual(10);
    });
  
    it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
      const newTr = document.createElement('tr');
      appendTd(newTr, 'test');
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('test');
    });
  
    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
      const newTr = document.createElement('tr');
      appendDeleteBtn(newTr);
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('X');
    });
  
    afterEach(function() {
      resetAllInputsAndTables();
    });
  
    function setDefaultInputs() {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
    }
  
    function setInputsAndSubmit(billAmt, tipAmt) {
      billAmtInput.value = billAmt;
      tipAmtInput.value = tipAmt;
      submitPaymentInfo();
    }
  
    function resetAllInputsAndTables() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds.forEach(td => (td.innerHTML = ''));
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    }
  });
  