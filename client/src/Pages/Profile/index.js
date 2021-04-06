import React from 'react';
import fetchJSON from "../../util/API"
import './style.css'

import { PieChart } from 'react-minimal-pie-chart';



const color = [
  "#003f5c",
  "#2f4b7c",
  "#665191",
  "#a05195",
  "#d45087",
  "#f95d6a",
  "#ff7c43",
  "ffa600",
  "#003f5c",
  "#2f4b7c",
  "#665191",
  "#a05195",
  "#d45087",
  "#f95d6a",
  "#ff7c43",
  "ffa600"
]

const ImgUpload = ({
  onChange,
  src,
}) => {
  return (
    <label for="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload" >
        <img className="uploadImg" for="photo-upload" src={src} />
      </div>
      <input id="photo-upload" type="file" onChange={onChange} />
    </label>
  );
}
const Name = ({ onChange, value }) => {
  return (
    <div className="field">
      <span>
        name:
        </span>
      <input type="text" onChange={onChange} maxlength="25" value={value} required />
    </div>
  );
}
const Email = ({ onChange, value }) => {
  return (
    <div className="field">
      <span>
        email:
        </span>
      <input type="text" onChange={onChange} maxlength="35" value={value} required />
    </div>
  );
}
const LastName = ({ onChange, value }) => {
  return (
    <div className="field">
      <span>
        last name:
      </span>
      <input type="text" onChange={onChange} maxlength="35" value={value} required />
    </div>
  );
}
const PhoneNumber = ({ onChange, value }) => {
  return (
    <div className="field">
      <span>
        PhoneNumber:
      </span>
      <input type="text" onChange={onChange} maxlength="35" value={value} required />
    </div>
  );
}
const Profile = ({
  onSubmit,
  src,
  name,
  last_name,
  email,
  phone,
  data,
  score
}) => {
  return (
    <div class="container emp-profile card">
      <form onSubmit={onSubmit} class="profileForm">
        <div class="row justify-content-center">
          <div class="col-md-4 ">
            <label className="custom-file-upload fas">
              <div className="img-wrap" >
                <img className="uploadImg" for="photo-upload" src={src} />
              </div>
            </label>
          </div>
          <div class="col-md-5">
            <div class="profile-head ">
              <h1>
                {name}
              </h1>
              <p class="proile-rating"></p>
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                </li>

              </ul>
            </div>
          </div>
          <div class="col-md-2">
            <button type="submit" className="edit">Edit Profile </button>
          </div>
        </div>
        <div class="row">


          <div className="col-md-1"></div>
          

          <div class="col-md-7 ">
            <div class="tab-content profile-tab" id="myTabContent">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="row">
                  <div class="col-md-3 offset-md-4">
                    <label>First Name</label>
                  </div>
                  <div class="col-md-3 ">
                    <p>{name}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3 offset-md-4">
                    <label>Last Name</label>
                  </div>
                  <div class="col-md-3">
                    <p>{last_name}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3 offset-md-4">
                    <label>Email</label>
                  </div>
                  <div class="col-md-3 ">
                    <p>{localStorage.email}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3 offset-md-4">
                    <label>Phone</label>
                  </div>
                  <div class="col-md-3">
                    <p>{phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h4>Highest Result</h4>
            <PieChart

              style={{

                fontFamily:
                  '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                fontSize: '10px',

              }}

              lineWidth={80}
              labelStyle={{
                fill: '#fff',
                pointerEvents: 'none',
              }}
              labelPosition={100 - 80 / 2}
              data={data}
              label={({ dataEntry }) => Math.round(dataEntry.percentage) + '/100'}
            />


          </div>
        </div>
      </form>
    </div>
  );
}
       
const Edit =({
  onSubmit,
  children,
})=>{
  return(
    <div className="card">
      <form onSubmit={onSubmit} class="editForm">
        <h1>Profile</h1>
        {children}
        <button type="submit" className="save">Save </button>
      </form>
    </div>
  );
}

class CardProfile extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
       file: '',
       imagePreviewUrl: 'images/me.png',
       name:'',
       last_name:'',
       email:'',
       phone:'',
       active: '2',
       score:'',
       othersScore:'',
       data:[]
    };
  }
   addData =(value1,value2) => {
     console.log('typeeeeee')
    let number1 = Math.floor(Math.random() * value2)
    let number2 = Math.floor(Math.random() * value1)
    return (
      // this.state.data.push({ title: 'four', value: value, color: `${color[number]}` })
      this.setState({data:[...this.state.data ,{title: "Wrong Answers", value: value2, color: `${color[number1]}`},{title: 'Highest Score', value: value1, color: `${color[number2]}`}]})
    )
  
  }
  
  // let data = [
    
  // ]
  
  componentDidMount(){
    setTimeout(()=>{this.getData()},100)
    // setTimeout(()=>{this.addData(this.state.score); console.log('scocreeeeeeee',this.state.score)},100)

  }

  async getData(){
    const fetchOptions = {
      method: 'get',
      headers: {
          'Content-Type': 'application/json',
          'email': localStorage.email || ''

      },

  }
  console.log('localStorage.email',localStorage.email)
    let {userData} = await fetch( '/api/users/profile',fetchOptions).then( res=>res.json())
    console.log('userData',userData);
    // this.setState({...userData})
    this.setState({name:userData.first_name,email:userData.email, last_name:userData.last_name,phone:userData.phone_number,file:userData.file  })
    let userScore = await fetch('/api/user/score', fetchOptions).then(res => res.json())
    // console.log('[userScore]',userScore)
    this.setState({score:userScore.score,othersScore:userScore.otherScore})

    console.log('score is ', this.state.score)
    console.log('Others score is ', this.state.othersScore)
    let x= this.state.score
    console.log(10-x)
    this.addData(this.state.score,(10-x))
  }

  async editData(){
    const userInfo = {
       picture: this.state.imagePreviewUrl,
       first_name:this.state.name,
       last_name:this.state.last_name,
       phone_number:this.state.phone,

  }
    const fetchOptions = {
      method: 'post',
      headers: {
          'Content-Type': 'application/json',
          'email': localStorage.email || ''

      },
      body : JSON.stringify( userInfo )
  }
  let { userData  } = await fetch( '/api/users/editProfile',fetchOptions).then( res=>res.json())

  }

  async photoUpload (e) {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    console.log('fileeeeeeeeeeeeeeee', file)
   
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
  }
  editName (e) {
    const name = e.target.value;
    this.setState({
      name,
    });
  }
  editLastName (e) {
    const last_name = e.target.value;
    this.setState({
      last_name,
    });
  }
  editEmail (e) {
    const email = e.target.value;
    this.setState({
      email,
    });
  }
  editPhone (e) {
      const phone = e.target.value;
      this.setState({
        phone,
      });
    }
  handleSubmit(e) {
    e.preventDefault();
    this.editData()
    let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
    this.setState({
      active: activeP,
    })
  }
  
  render() {
    const {imagePreviewUrl, 
           name, 
           last_name,
           phone, 
           active,
          score,
        othersScore,
      data} = this.state;
    return (
      <div>
        {(active === 'profile')  
          ?<Edit onSubmit={(e)=>this.handleSubmit(e)}>
              <ImgUpload onChange={(e)=>this.photoUpload(e)} src={imagePreviewUrl}/>
              <Name onChange={(e)=>this.editName(e)} value={name}/>
              <LastName onChange={(e)=>this.editLastName(e)} value={last_name}/>
              <PhoneNumber onChange={(e)=>this.editPhone(e)} value={phone}/>
          
            </Edit>
          :<Profile onSubmit={(e)=>this.handleSubmit(e)} src={imagePreviewUrl} name={name} last_name={last_name} data={data} phone={phone} score={score} othersScore={othersScore} others/>}
        
      </div>
    )
  }
}

export default CardProfile