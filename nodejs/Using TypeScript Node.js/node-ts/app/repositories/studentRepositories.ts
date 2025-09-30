import { Student} from "../model/studentModel";

class StudentRepositories{
    //create a student
    async save(data: any) {
        try {
            const newStudent = await Student.create(data)
            return newStudent

        } catch (error) {
            console.log(error)
        }
    }
//all data
    async find(){
        try{
            const student=await Student.find()
            return student
        }catch(error){
            console.log(error)
        }
    }
//single data
    async singleData(id:string){
        try{
            const sdata=await Student.findById({_id:id})
            if (!sdata) {
                return 'student not available'
            }
            return sdata
        }catch(error){
            console.log(error);     
        }
    }

    //update a post
    async updatePost(id: string, data: any) {
        try {
                //pass the id of the object you want to update
                //data is for the new body you are updating the old one with
                //new:true, so the dats being returned, is the update one
                const student = await Student.findByIdAndUpdate({_id:id}, data, {new: true})                
                if(!student){
                    return "student not available"
                }
                return student          
        } catch (error) {
            console.log(error)
        }
    }

   //delete a post by using the find by id and delete 
   async deleteStudent(id: string) {
    try {
        const studentDel = await Student.findByIdAndDelete(id)
        if (!studentDel) {
            return 'student not available'
        }
    } catch (error) {
        console.log(error)
    }
}


}

const studentRepositories=new StudentRepositories()

export {studentRepositories}

