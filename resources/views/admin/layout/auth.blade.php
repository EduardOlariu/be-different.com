<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Be different') }}</title>

    <!-- Styles -->

@include('layouts.partials.includes')
<!-- Scripts -->
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
</head>
<body>


@include('admin.layout.partials.menu')
@include('layouts.partials.flash_message')


@yield('content')



<!-- Scripts -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="/js/app.js"></script>
<script src="/js/custom.js"></script>
@yield('scripts')
</body>
</html>
