<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users= User::latest();

        if(!empty($request->get('keyword'))){
            $users = User::where('name', 'LIKE', '%'.$request->get('keyword').'%');

        }
        $users= $users->paginate(8);
        
        return view('admin.users.list',['users'=>$users]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.users.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users,email',
            'image' =>'required|image|max:2048',
            'address' =>'required',
            'phone' =>'required',
           
            
        ]);
        // dd($request);
        if ($validator->passes()) {

            $img = $request->image;
            $ext = $img->getClientOriginalExtension();
            $imageName = time() . '.' . $ext;
            $img->move(public_path() . '/uploads/users', $imageName);


            $users = new User();
            $users->name = $request->name;
            $users->email = $request->email;
            $users->image = $imageName;
            $users->address = $request->address;
            $users->phone = $request->phone;
            $users->save();

            Session()->flash('success','User added successfully..');
            return response()->json([
                'status' => true,
                'message' => 'Data saved successfully',
                'data' => $request->all(),

            ]);
        } else {
            // Return with error message
            return response()->json([
                'status' => false,
                'message' => $validator->errors(),

            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id,Request $request)
    {
      
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit( $id,Request $request)
    {
        $users = User::find($id);
        return view('admin.users.edit', ['users'=>$users]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        // dd($request);
        $users = User::find($id);
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'image' =>'required|image|max:2048',
            'address' =>'required',
            'phone' =>'required',   
        ]);
        if ($validator->passes()) {
            $img = $request->image;
            $ext = $img->getClientOriginalExtension();
            $imageName = time() . '.' . $ext;
            $img->move(public_path() . '/uploads/users', $imageName);

         
            $users->name = $request->name;
            $users->image = $imageName;
            $users->address = $request->address;
            $users->phone = $request->phone;
            $users->save();

            Session()->flash('success','User updated successfully..');
            return response()->json([
                'status' => true,
                'message' => 'Data updated successfully',
                'data' => $request->all(),

            ]);
        } else {
            // Return with error message
            return response()->json([
                'status' => false,
                'message' => $validator->errors(),

            ]);
        }
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destory( $id)
    {
        $users = User::find($id);
        $users->delete();
      return back()->with('success','users deleted successfully..');
    }
}
