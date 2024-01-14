// export default function Board() {
//     this.field = [
//       ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'],
//       ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
//       ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
//       ['30', '31', '32', '33', '34', '35', '36', '37', '38', '39'],
//     ];
//   }
  
//   Board.prototype.getField = function (cords) {
//     const [rowIndex, colIndex] = cords;
//     return this.field[rowIndex][colIndex];
//   };

export default class Board2 {
    field =  [
        ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'],
        ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
        ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
        ['30', '31', '32', '33', '34', '35', '36', '37', '38', '39'],
      ];

    getField = function(cords) {
        const [rowIndex, colIndex] = cords;
        return field[rowIndex][colIndex];
    }
}