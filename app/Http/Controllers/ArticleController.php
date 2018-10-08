<?php

namespace App\Http\Controllers;

use App\Article;
use App\Helpers\ApiHelper;
use DeepCopy\f001\A;
use Illuminate\Contracts\Logging\Log;
use Illuminate\Http\Request;
use function PHPSTORM_META\elementType;

class ArticleController extends Controller
{
    public function index()
    {
        $all = Article::all();
        return ApiHelper::responseSuccess('List Article', ['data' => $all]);
    }

    public function show($id)
    {
        $Article = Article::find($id);
        return ApiHelper::responseSuccess('List Article', ['data' => $Article]);
    }

    public function store(Request $request)
    {
        $article = new Article();
        $article->fill($request->all());
        if ($article->save()) {
            return ApiHelper::responseSuccess('Created Article', ['data' => $article]);
        }
    }

    public function update(Request $request, $id)
    {
        $article = Article::find($id);
        if ($article === null) {
            return ApiHelper::responseClientFail('article không tồn tại');
        }
        $article->body = $request->input('body');
        if ($article->save()) {
            return ApiHelper::responseSuccess('updated Article', ['data' => $article]);
        }

    }

    public function delete(Request $request, $id)
    {
        $article = Article::findOrFail($id);
        $article->delete();

        return 204;
    }
}
