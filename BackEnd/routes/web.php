<?php

use Laravel\Lumen\Routing\Router;

/** @var Router $router */

$router->group(['prefix' => 'api/v1'], function () use ($router) {
    $router->get('/test', function () {
        return response()->json(['text' => 'Hello World']);
    });
});
