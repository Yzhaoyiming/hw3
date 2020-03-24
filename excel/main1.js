$(function() {
    var data = [
      ['java', '1', '降', '-0.01%'],
      ['C', '2', '升', '+2.44%'],
      ['Python', '3', '升', '+1.41%'],
      ['C++', '4', '降', '-2.58%'],
      ['C#', '5', '升', '+2.07%'],
      ['Visual Basic.NET', '6', '降', '-1.17%'],
      ['JavaScript', '7', '降', '-0.85%'],
    ];
  
    var container = $('#main');
    
    /* global Handsontable: true */
    var hot = new Handsontable(container.get(0), {
      data: data,
      stretchH:"all" ,
      width:850,
      autoWrapRow:true,
      height:450,
      rowHeights:50,
      colWidths:55,
      className:"htCenter htMiddle",
      maxRows:20,        
      manualRowResize : true,     // 允许行拖动  
      manualColumnResize : true,  // 允许列拖动 
      rowHeaders: false,
      colHeaders: [
        '语言名称',
        '排名',
        '升或降',
        '变化幅度',
      ]
    });
  
    return hot;
  });