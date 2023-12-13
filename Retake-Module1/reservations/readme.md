# Reservation Project to retake module 1.2
susu kub
## Code explain

### Static
สร้างค่า static ไว้ให้มันรันไอดีเอง
```
static autoId = 1
```

### constructor ไม่รับค่า parameter อะไรเลยแต่ประกาศ this.reservations เป็น [] (empty array)
สังเกตุได้จากโจทย์ที่อาจารย์ตั้งจะเขียนประมาณว่า
constructor: **without parameter** initial 'ชื่อตัวแปรที่เขาจะให้ตั้ง' property to an empty array ([])

วิธีคือ
```
constructor(ตรงนี้คือค่า paremeter เขาไม่รับ เราไม่ใส่) {
  this.ชื่อตัวแปรที่เขาจะให้ตั้ง = [] // Initial 'ชื่อตัวแปรที่เขาจะให้ตั้ง' property to an empty array ([])
}
```

### getAllReservation()
return array ออกมาในที่นี้คือ this.reservations
```
getAllReservation() {
  return this.reservations
}
```
### addNewreservation(name, qty)

เพิ่มค่าใหม่ลงใน array รับ parameter 2 ตัว ชื่อ name, qty
สร้าง object ใหม่ ({})<br>
กำหนด property id เป็น Reserve(ชื่อ class).autoId(เข้าถึง static)++(บวกเองทุกครั้งที่สร้างใหม่)<br>
กำหนด property name เป็น paremeter name ที่รับค่าจาก addNewreservation<br>
กำหนด property qty เป็น paremeter qty ที่รับค่าจาก addNewreservation<br>
เอาค่าที่สร้างใหม่เข้าไปใน array โดยใช้ method push() *ไม่จำเป็นต้อง return*<br>
โจทย์บอกให้แสดงค่า length ใหม่ของ array ให้ return บรรทัดที่ใช้ method push<br>
The push() method returns the new length.<br>
โจทย์บอกให้ return ค่าที่เพิ่มไป ทำแบบที่ทำ
```
addNewreservation(name, qty) {
  const newReservation = {
    id: Reserve.autoId++,
    name: name,
    qty: qty
  }
  this.reservations.push(newReservation)
  return newReservation
  }
```

### getIndexOfReservation(id)
รับค่า parameter ชื่อ id เพื่อหา index ของ id นั้น
index คือตำแหน่งของค่าใน array, Javascript นับตำแหน่งแรกเป็น 0
ตัวอย่างเช่น
```
const exampleArr = [1, 2, 3, 4, 5]
index ของค่า 1 ใน exampleArr คือ 0
length ของ exampleArr คือ 5 (นับเหมือนเวลาเรานับเลข)
```
สร้างตัวแปร findIndex(ชื่ออะไรก็ได้) กำหนดให้เท่ากับ this.reservations(ซึ่งคือ array ของเรา) รับ parameter ชื่อ rs(ชื่ออะไรก็ได้)
เทียบค่า rs.id(ในที่นี้คือเรากำลังเข้าถึง this.reservations property ที่ชื่อ id ใน object นั้น ๆ) เทียบกับ id ซึ่งคือ paremeter ที่เรารับจาก getIndexOfReservation<br>
**หา index จากชื่อทำเหมือนกัน แค่เทียบ rs.name กับค่า name ที่รับมา**
```
getIndexOfReservation(id) {
  const findIndex = this.reservations.findIndex(rs => rs.id === id)
  return findIndex
}
```

### updateNameOfReservationById(targetId, updateName)
รับ parameter สองตัวคือ targetId, updateName<br>
สร้าง findIndexById(ชื่ออื่นก็ได้) มาหาค่า index ที่เราจะแก้(การแก้ไขข้อมูลเราต้องอิงจากค่า index เราถึงจะรู้ว่าเราจะเข้าไปแก้ตำแหน่งไหน ไม่ได้อิงจาก id ที่เราสร้าง)<br>
ไปดึง getIndexOfReservation มาใช้ขี้เกียจเขียนหลายรอบ แต่ทีนี้เราก็เอาค่า targetId(ที่รับจาก updateNameOfReservationById) ไปใส่ใน parameter แทน
```
const findIndexById = this.getIndexOfReservation(targetId)
```
เช็คเงื่อนไข ถ้า index ที่เราหา = -1 คือ ไม่มีค่านี้อยู่ใน array (ถ้าไม่มีค่านี้อยู่ใน array, Javascript จะ return -1 มาให้)
```
if (findIndexById !== -1)
อันนี้เขียน !== -1 แสดงว่าถ้ามีค่าอยู่ใน array ให้ บลาๆๆๆๆๆ
```
เข้าถึง reservations array ในตำแหน่งที่เราต้องการจะแก้(ทีนี้คือเราหาตำแหน่งมาแล้วจากตัวแปร findIndexById<br>
.name เพื่อเข้าถึง property ที่ชื่อ name ใน object<br>
ตั้งให้ = updateName(paremeter ที่รับมาจาก updateNameOfReservationById)
เป็นอันจบปิ๊ง
```
this.reservations[findIndexById].name = updateName
```
```
    updateNameOfReservationById(targetId, updateName) {
        const findIndexById = this.getIndexOfReservation(targetId)
        // or
        // const index = this.reservations.findIndex(rs => rs.id === targetId)
        if (findIndexById !== -1) {
            // We just return to see what update value
            // If you not return this function still work
            return this.reservations[findIndexById].name = updateName
            // or
            // this.reservations[index] = updateName
        } else {
            return 'this index not exist'
        }
    }
```

### updateNameOfReservationByName
ทำเหมือนเมื่อกี้ขกเขียนแล้ว<br>
แต่วิธีหา index เราจะใช้ property name ใน reservations array เทียบกับ targetName(parameter ที่รับมาจาก updateNameOfReservationByName)<br>
.toLowerCase() เพื่อ case-insensitive เพราะปกติ A != a<br>
เราจะแปลงทุกค่ามาเป็นตัวเล็กให้หมด user input (A) toLowerCase จะเปลี่ยนให้เป็น (a)
```
const findIndexByName = this.reservations.findIndex(fs => fs.name.toLowerCase() === targetName.toLowerCase())
```
```
    updateNameOfReservationByName(targetName, updateName) {
        const findIndexByName = this.reservations.findIndex(fs => fs.name.toLowerCase() === targetName.toLowerCase())
        if(findIndexByName !== -1) {
            // We just return to see what update value
            // If you not return this function still work
            return this.reservations[findIndexByName].name = updateName
        } else {
            return 'this index not exist'
        }

    }
```

### updateDetailInReservation(targetId, updateDetail)
คล้าย ๆ เดิมแต่รอบนี้ user จะสามารถใส่ค่าเป็น object เพื่อแก้ไขค่าได้หลาย ๆ ตัว<br>
หา index เหมือนเดิม, เช็คค่ามีค่าอยู่มั้ยโดยเทียบกับ -1 ถ้ามีค่าอยู่ทำให้สามารถแก้ไขได้<br>
|| เพื่อสมมติ user อยากแก้ค่าแค่ qty จะทำให้มันไม่อ่านค่าตัวที่เหลือเป็น undefined แต่เอาค่าเก่ามาใส่แทน<br>
อธิบายไม่ถูกตัวอย่างคือ
```
{name: 'a', qty: 20}
if user update only qty to 100 without ||
updateDetailInReservation({qty: 100})
Result will be
{name: undefined, qty: 100}
```
```
this.reservations[findIndexById].name = updateDetail.name || this.reservations[findIndexById].name
this.reservations[findIndexById].qty = updateDetail.qty || this.reservations[findIndexById].qty
```

```
    updateDetailInReservation(targetId, updateDetail) {
        const findIndexById = this.getIndexOfReservation(targetId)
        if(findIndexById !== -1) {
            this.reservations[findIndexById].name = updateDetail.name || this.reservations[findIndexById].name
            this.reservations[findIndexById].qty = updateDetail.qty || this.reservations[findIndexById].qty
        } else {
            return 'this index not exist'
        }
    }
```

### removeReservationById(removeId)
รับค่า parameter 1 ตัว คือ removeId<br>
หา index ก่อนเหมือนเดิม, เช็คว่ามีค่าอยู่มั้ยเหมือนเดิม
วิธีลบใช้ method splice(ตำแหน่งที่เริ่ม, จำนวนที่ลบ)
ในที่นี้เราต้องการลบตัวที่ user ใส่ id มา จำนวนที่ลบ = 1<br>
ถ้า return บรรทัด splice จะโชว์ค่าที่ลบ ไม่ใช่ array ใหม่หลังการลบ บางโจทย์ไม่ให้โชว์ก็ไม่ต้อง return มันยังทำงานได้ปกติ<br>
**IMPORTANT การจัดการค่าใน array ขึ้นอยู่กับ index ไม่ใช่ id เรารับค่า id มาจาก user ก็จริง แต่เราเอาค่า id เพื่อมาหาว่าไอ id นี้อยู่ index ไหน แล้วไปลบมันออก**
```
    removeReservationById(removeId) {
        const index = this.getIndexOfReservation(removeId)
        // or
        // const index = this.reservations.findIndex(rs => rs.id === removeId)
        if (index !== -1) {
            // บรรทัดนี้คือการลบ ไม่ต้อง return ก็ทำงานได้ปกติ, return จะแสดงค่าที่ลบไป
            return this.reservations.splice(index, 1)
        } else {
            return 'this index not exist'
        }
    }
```

### removeReservationByName(removeName)
เหมือนกันแต่เปลี่ยนวิธีหาไอดีเฉย ๆ 564565465465454
```
    removeReservationByName(removeName) {
        const findIndexByName = this.reservations.findIndex(rs => rs.name.toLowerCase() === removeName.toLowerCase())
        if (findIndexByName !== -1) {
            // บรรทัดนี้คือการลบ ไม่ต้อง return ก็ทำงานได้ปกติ, return จะแสดงค่าที่ลบไป
            return this.reservations.splice(findIndexByName, 1)
        } else {
            return 'this index not exist'
        }
    }
```

```
  ____                 _   _               _    
 / ___| ___   ___   __| | | |   _   _  ___| | __
| |  _ / _ \ / _ \ / _` | | |  | | | |/ __| |/ /       
| |_| | (_) | (_) | (_| | | |__| |_| | (__|   < 
 \____|\___/ \___/ \__,_| |_____\__,_|\___|_|\_\
      /\_/\                      
 /\  / o o \                    
//\\ \~(*)~/
`  \/   ^ /
   | \|| ||
   \ '|| ||
    \)()-())
```
# จบแล้วนอนได้
