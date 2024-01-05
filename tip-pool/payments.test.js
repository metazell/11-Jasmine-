describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
    });
  
    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
      submitPaymentInfo();
  
      const payment = allPayments['payment1'];
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(payment.billAmt).toEqual('100');
      expect(payment.tipAmt).toEqual('20');
      expect(payment.tipPercent).toEqual(20);
    });
  
    it('should not add a new payment on submitPaymentInfo() with empty input', function () {
      billAmtInput.value = '';
      submitPaymentInfo();
      expect(Object.keys(allPayments).length).toEqual(0);
    });
  
    it('should payment update #paymentTable on appendPaymentTable()', function () {
      let curPayment = createCurPayment();
      allPayments['payment1'] = curPayment;
  
      appendPaymentTable(curPayment);
  
      const curTdList = document.querySelectorAll('#paymentTable tbody tr td');
      const [billAmt, tipAmt, tipPercent, deleteBtn] = curTdList;
  
      expect(curTdList.length).toEqual(4);
      expect(billAmt.innerText).toEqual('$100');
      expect(tipAmt.innerText).toEqual('$20');
      expect(tipPercent.innerText).toEqual('%20');
      expect(deleteBtn.innerText).toEqual('X');
    });
  
    it('should create a new payment on createCurPayment()', function () {
      const expectedPayment = {
        billAmt: '100',
        tipAmt: '20',
        tipPercent: 20,
      };
  
      expect(createCurPayment()).toEqual(expectedPayment);
    });
  
    it('should not create payment with empty input on createCurPayment()', function () {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      expect(createCurPayment()).toBeUndefined();
    });
  
    afterEach(function() {
      resetInputsAndTables();
    });
  
    function resetInputsAndTables() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds.forEach(td => (td.innerHTML = ''));
      serverTbody.innerHTML = '';
      paymentId = 0;
      allPayments = {};
    }
  });
  