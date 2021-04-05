import React from 'react';
import fetchJSON from "../../util/API"
import './style.css'

 
const ImgUpload =({
    onChange,
    src,
  })=>{
    return(
      <label for="photo-upload" className="custom-file-upload fas">
        <div className="img-wrap img-upload" >
          <img for="photo-upload" src={src}/>
        </div>
        <input id="photo-upload" type="file" onChange={onChange}/> 
      </label>
    );
  }
  const Name =({onChange, value})=>{ return(
      <div className="field">
        <span>
          name:
        </span>
        <input type="text" onChange={onChange} maxlength="25" value={value} required/> 
      </div>
    );
  }
  const Email =({onChange,value})=>{return(
      <div className="field">
        <span>
          email:
        </span>
        <input type="text" onChange={onChange} maxlength="35" value={value} required/> 
      </div>
    );
  }

  const PhoneNumber =({onChange,value})=>{return(
    <div className="field">
      <span>
      PhoneNumber:
      </span>
      <input type="text" onChange={onChange} maxlength="35" value={value} required/> 
    </div>
  );
}
  const Profile =({
    onSubmit,
    src,
    name,
    email,
    phone,
  })=>{
    return(
    <div class="container emp-profile card">
    <form onSubmit={onSubmit} class="profileForm">
        <div class="row justify-content-center">
            <div class="col-md-4 ">
            <label className="custom-file-upload fas">
            <div className="img-wrap" >
                <img for="photo-upload" src={src}/>
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
            <div class="col-md-12 ">
                <div class="tab-content profile-tab" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="row">
                                    <div class="col-md-3 offset-md-4">
                                        <label>User Id</label>
                                    </div>
                                    <div class="col-md-3 ">
                                        <p>{name}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 offset-md-4">
                                        <label>Name</label>
                                    </div>
                                    <div class="col-md-3">
                                        <p>{name}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 offset-md-4">
                                        <label>Email</label>
                                    </div>
                                    <div class="col-md-3 ">
                                        <p>{email}</p>
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
         name:'shiva',
         email:'shiva@gmail.com',
         phone:'22222222',
         active: 'edit'
      };
    }


    async photoUpload (e) {
      e.preventDefault();
      const reader = new FileReader();
      const file = e.target.files[0];
     
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
      reader.readAsDataURL(file);
      await fetchJSON( '/api/file', 'post', { file } )
    }
    editName (e) {
      const name = e.target.value;
      this.setState({
        name,
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
      let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
      this.setState({
        active: activeP,
      })
    }
    
    render() {
      const {imagePreviewUrl, 
             name, 
             email,
             phone, 
             active} = this.state;
      return (
        <div>
          {(active === 'profile')  
            ?<Edit onSubmit={(e)=>this.handleSubmit(e)}>
                <ImgUpload onChange={(e)=>this.photoUpload(e)} src={imagePreviewUrl}/>
                <Name onChange={(e)=>this.editName(e)} value={name}/>
                <Email onChange={(e)=>this.editEmail(e)} value={email}/>
                <PhoneNumber onChange={(e)=>this.editPhone(e)} value={phone}/>
              </Edit>
            :<Profile onSubmit={(e)=>this.handleSubmit(e)} src={imagePreviewUrl} name={name} email={email} phone={phone}/>}
          
        </div>
      )
    }
  }
  
export default CardProfile