@extends('admin.layouts.app')

@section('content')
<section class="content-header">
	<div class="container-fluid my-2">
		<div class="row mb-2">
			<div class="col-sm-6">
				<h1>Update User</h1>
			</div>
			<div class="col-sm-6 text-right">
				<a href="{{route('users.index')}}" class="btn btn-primary">Back</a>
			</div>
		</div>
	</div>
	<!-- /.container-fluid -->
</section>
<!-- Main content -->
<section class="content">
	<!-- Default box -->
	<div class="container-fluid">
		@include('admin.message')
		<div class="card">
			<form action="" method="post" id="userForm" name="userForm">
				
			<div class="card-body">
					<div class="row">
						<div class="col-md-6">
							<div class="mb-3">
								<label for="name">Name</label>
								<input type="text" value="{{$users->name}}"name="name" id="name" class="form-control" placeholder="Name">
								<p></p>
							</div>
						</div>

						<div class="col-md-6">
							<div class="mb-3">
							<label for="email">Email</label>
								<input disabled readonly type="text" value="{{$users->email}}"name="email" id="email" class="form-control" placeholder="Email">
							<p></p>
							</div>
						</div>
					</div>

					<div class="row">
					<div class="col-md-6">
					<img id="imagePreview" src="{{asset('uploads/users/'. $users->image)}}" alt="Image Preview" class="img-fluid" width="50px" height="50px">
						
							<div class="mb-3">
								<label for="image">Image</label>
								<input type="file"  name="image" id="image" class="form-control" placeholder="image">
								<p></p>
							</div>
						</div>
						<div class="col-md-12">
										<div class="mb-3">
											<label for="phone">Phone</label>
											<input type="text"  value="{{$users->phone}}" name="phone" id="phone" class="form-control" placeholder="Phone">	
											<p></p>
										</div>
									</div>
									<div class="col-md-12">
										<div class="mb-3">
											<label for="phone">Address</label>
											<textarea name="address" id="address" class="summernote  form-control" cols="30" rows="5">
                                            {{$users->address}}
                                            </textarea>
											<p></p>
										</div>
									</div>

						<div class="col-md-6">
							<div class="mb-3">
								<label for="Status" class="form-label">Status</label>
								<select name="status" class="form-control" id="status">
                                <option value="1" class="form-control" {{($users->role ==1)?'selected':""}} >Active</option>
									<option value="0" class="form-control"{{($users->role ==1)?'selected':""}} >Inactive</option>
								</select>
								</select>
							</div>
						</div>

					</div>
					<div class="pb-5 pt-3">
						<button class="btn btn-primary" type="submit">Update</button>
						<a href="{{route('users.edit',$users->id)}}" class="btn btn-outline-dark ml-3">Cancel</a>
					</div>
				</div>
			</form>
		</div>

	</div>
	<!-- /.card -->

</section>


@endsection

@section("customJs")
<script>
	$("#userForm").submit(function(e) {
		e.preventDefault();
		$("button[type=submit]").prop('disable',true);
		console.log('hi');

		$.ajax({
			url: "{{route('users.update',$users->id)}}",
			type: "POST",
			data: new FormData(this),
			dataType: 'json',
			contentType: false,
			cache: false,
			processData: false,
			success: function(response) {
				var errors = response['message'];
				$("button[type=submit]").prop('disable',false);

				if (response['status'] == true) {

					window.location.href="{{route('users.index')}}";



					$('#name').removeClass('is-invalid');
					$('#name').siblings('p').removeClass('.invalid-feedback text-danger').html("");
					$('#email').removeClass('is-invalid');
					$('#email').siblings('p').removeClass('.invalid-feedback text-danger').html("");
					$('#image').removeClass('is-invalid');
					$('#image').siblings('p').removeClass('.invalid-feedback text-danger').html("");
					$('#phone').removeClass('is-invalid');
					$('#phone').siblings('p').removeClass('.invalid-feedback text-danger').html("");
					$('#address').removeClass('is-invalid');
					$('#address').siblings('p').removeClass('.invalid-feedback text-danger').html("");
				


				} else {

					if (errors['name']) {
						$('#name').addClass('is-invalid');
						$('#name').siblings('p').addClass('.invalid-feedback text-danger').html(errors['name']);

					} else {
						$('#name').removeClass('is-invalid');
						$('#name').siblings('p').removeClass('.invalid-feedback text-danger').html("");
					}
					if (errors['email']) {
						$('#email').addClass('is-invalid');
						$('#email').siblings('p').addClass('.invalid-feedback text-danger').html(errors['email']);

					} else {
						$('#email').removeClass('is-invalid');
						$('#email').siblings('p').removeClass('.invalid-feedback text-danger').html("");
					}
					if (errors['image']) {
						$('#image').addClass('is-invalid');
						$('#image').siblings('p').addClass('.invalid-feedback text-danger').html(errors['image']);

					} else {
						$('#image').removeClass('is-invalid');
						$('#image').siblings('p').removeClass('.invalid-feedback text-danger').html("");
					}
					if (errors['phone']) {
						$('#phone').addClass('is-invalid');
						$('#phone').siblings('p').addClass('.invalid-feedback text-danger').html(errors['phone']);

					} else {
						$('#phone').removeClass('is-invalid');
						$('#phone').siblings('p').removeClass('.invalid-feedback text-danger').html("");
					}
					if (errors['address']) {
						$('#address').addClass('is-invalid');
						$('#address').siblings('p').addClass('.invalid-feedback text-danger').html(errors['address']);

					} else {
						$('#address').removeClass('is-invalid');
						$('#address').siblings('p').removeClass('.invalid-feedback text-danger').html("");
					}
					

				}


			},
			error: function(jqHR, exception) {
				console.log('something went wrong.');
			}
		});

	});


	
</script>
@endsection